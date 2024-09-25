import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  HttpException,
  HttpStatus,
  Res,
  UploadedFile,
} from '@nestjs/common';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { PdfMergerService } from './pdf-merger.service';
import { Response } from 'express';

// Ensure the Express types are imported
import { Express } from 'express';

@Controller('pdf')
export class PdfMergerController {
  constructor(private readonly pdfMergerService: PdfMergerService) {}

  // Merge PDFs
  @Post('merge')
  @UseInterceptors(FilesInterceptor('pdfs', 10))  // Maximum 10 files at once
  async mergePdfs(
    @UploadedFiles() files: Express.Multer.File[],
    @Res() res: Response
  ) {
    try {
      if (!files || files.length < 2) {
        throw new HttpException('At least two PDF files are required', HttpStatus.BAD_REQUEST);
      }

      const pdfBuffers = files.map(file => file.buffer);
      const mergedPdf = await this.pdfMergerService.mergePdfs(pdfBuffers);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=merged.pdf',
      });

      return res.send(mergedPdf);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Split PDF
  @Post('split')
  @UseInterceptors(FileInterceptor('pdf'))  // Single file upload
  async splitPdf(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    try {
      if (!file) {
        throw new HttpException('A PDF file is required', HttpStatus.BAD_REQUEST);
      }

      const splitPdfs = await this.pdfMergerService.splitPdf(file.buffer);

      res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename=split_pdfs.zip',
      });

      return res.send(splitPdfs);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Compress PDF
  @Post('compress')
  @UseInterceptors(FileInterceptor('pdf'))  // Single file upload
  async compressPdf(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    try {
      if (!file) {
        throw new HttpException('A PDF file is required', HttpStatus.BAD_REQUEST);
      }

      const compressedPdf = await this.pdfMergerService.compressPdf(file.buffer);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=compressed.pdf',
      });

      return res.send(compressedPdf);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('pdf-to-word')
  @UseInterceptors(FileInterceptor('pdf')) // Intercepting the uploaded PDF file
  async pdfToWord(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      // Validate if a file is provided
      if (!file) {
        throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
      }

      // Call service method to convert PDF to Word
      const wordDocumentBuffer = await this.pdfMergerService.pdfToWord(file.buffer);

      // Set headers and return the converted Word file
      res.set({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename=converted.docx',
      });

      return res.send(wordDocumentBuffer);
    } catch (error) {
      // Handle errors and throw appropriate HTTP exceptions
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('pdf-to-powerpoint')
  @UseInterceptors(FileInterceptor('pdf')) // Intercepting the uploaded PDF file
  async pdfToPowerPoint(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      // Validate if a file is provided
      if (!file) {
        throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
      }

      // Call the service method to convert PDF to PowerPoint
      const pptxBuffer = await this.pdfMergerService.pdfToPowerPoint(file.buffer);

      // Set headers and return the converted PowerPoint file
      res.set({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': 'attachment; filename=converted.pptx',
      });

      return res.send(pptxBuffer);
    } catch (error) {
      // Handle errors and throw appropriate HTTP exceptions
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('pdf-to-excel')
  @UseInterceptors(FileInterceptor('pdf')) // Intercepting the uploaded PDF file
  async pdfToExcel(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      // Validate if a file is provided
      if (!file) {
        throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
      }

      // Call the service method to convert PDF to Excel
      const excelBuffer = await this.pdfMergerService.pdfToExcel(file.buffer);

      // Set headers and return the converted Excel file
      res.set({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=converted.xlsx',
      });

      return res.send(excelBuffer);
    } catch (error) {
      // Handle errors and throw appropriate HTTP exceptions
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}
