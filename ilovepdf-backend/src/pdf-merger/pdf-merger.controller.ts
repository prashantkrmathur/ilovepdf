import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PdfMergerService } from './pdf-merger.service';
import { Response } from 'express';

// Ensure the Express types are imported
import { Express } from 'express';

@Controller('pdf')
export class PdfMergerController {
  constructor(private readonly pdfMergerService: PdfMergerService) {}

  @Post('merge')
  @UseInterceptors(FilesInterceptor('pdfs', 10))  // Maximum 10 files at once
  async mergePdfs(
    @UploadedFiles() files: Express.Multer.File[],  // Correct type for uploaded files
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
}
