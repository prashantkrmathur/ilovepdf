import { Injectable, BadRequestException } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs';
import * as JSZip from 'jszip';  // For zipping files in split PDF
import * as child_process from 'child_process'; // for CLI usage

@Injectable()
export class PdfMergerService {

  // Merge PDFs (existing code)
  async mergePdfs(pdfBuffers: Buffer[]): Promise<Buffer> {
    if (pdfBuffers.length < 2) {
      throw new BadRequestException('You need to provide at least two PDFs to merge');
    }

    const mergedPdf = await PDFDocument.create();
    
    for (const pdfBuffer of pdfBuffers) {
      const pdfToMerge = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(pdfToMerge, pdfToMerge.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();
    return Buffer.from(mergedPdfBytes);
  }

  // Split PDF into individual pages
  async splitPdf(pdfBuffer: Buffer): Promise<Buffer> {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const zip = new JSZip();

    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      const singlePagePdf = await PDFDocument.create();
      const [copiedPage] = await singlePagePdf.copyPages(pdfDoc, [i]);
      singlePagePdf.addPage(copiedPage);

      const pdfBytes = await singlePagePdf.save();
      zip.file(`page-${i + 1}.pdf`, pdfBytes);
    }

    // Return zipped PDF files
    return await zip.generateAsync({ type: 'nodebuffer' });
  }

  // Compress PDF
  async compressPdf(pdfBuffer: Buffer): Promise<Buffer> {
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Logic for compressing the PDF, like removing unnecessary objects or reducing image quality
    // For simplicity, this is a placeholder:
    const compressedPdfBytes = await pdfDoc.save({ useObjectStreams: false });
    return Buffer.from(compressedPdfBytes);
  }

  async pdfToWord(pdfBuffer: Buffer): Promise<Buffer> {
    try {
      // Save the uploaded PDF buffer as a temporary file
      const tempPdfPath = './temp/input.pdf';
      const tempWordPath = './temp/output.docx';

      // Write the PDF buffer to the file system
      fs.writeFileSync(tempPdfPath, pdfBuffer);

      // Use a CLI tool like LibreOffice or an online API to convert PDF to Word
      // Example using LibreOffice CLI command (assuming LibreOffice is installed):
      const command = `libreoffice --headless --convert-to docx ${tempPdfPath} --outdir ./temp`;
      child_process.execSync(command);

      // Read the resulting Word file into a buffer
      const wordBuffer = fs.readFileSync(tempWordPath);

      // Clean up temporary files
      fs.unlinkSync(tempPdfPath);
      fs.unlinkSync(tempWordPath);

      // Return the Word buffer
      return wordBuffer;
    } catch (error) {
      throw new BadRequestException('Failed to convert PDF to Word');
    }
  }

  async pdfToPowerPoint(pdfBuffer: Buffer): Promise<Buffer> {
    try {
      // Save the uploaded PDF buffer as a temporary file
      const tempPdfPath = './temp/input.pdf';
      const tempPptxPath = './temp/output.pptx';

      // Write the PDF buffer to the file system
      fs.writeFileSync(tempPdfPath, pdfBuffer);

      // Use a CLI tool like LibreOffice or an online API to convert PDF to PowerPoint
      // Example using LibreOffice CLI command (assuming LibreOffice is installed):
      const command = `libreoffice --headless --convert-to pptx ${tempPdfPath} --outdir ./temp`;
      child_process.execSync(command);

      // Read the resulting PowerPoint file into a buffer
      const pptxBuffer = fs.readFileSync(tempPptxPath);

      // Clean up temporary files
      fs.unlinkSync(tempPdfPath);
      fs.unlinkSync(tempPptxPath);

      // Return the PowerPoint buffer
      return pptxBuffer;
    } catch (error) {
      throw new BadRequestException('Failed to convert PDF to PowerPoint');
    }
  }

  async pdfToExcel(pdfBuffer: Buffer): Promise<Buffer> {
    try {
      // Save the uploaded PDF buffer as a temporary file
      const tempPdfPath = './temp/input.pdf';
      const tempExcelPath = './temp/output.xlsx';

      // Write the PDF buffer to the file system
      fs.writeFileSync(tempPdfPath, pdfBuffer);

      // Use a CLI tool like LibreOffice or an online API to convert PDF to Excel
      // Example using LibreOffice CLI command (assuming LibreOffice is installed):
      const command = `libreoffice --headless --convert-to xlsx ${tempPdfPath} --outdir ./temp`;
      child_process.execSync(command);

      // Read the resulting Excel file into a buffer
      const excelBuffer = fs.readFileSync(tempExcelPath);

      // Clean up temporary files
      fs.unlinkSync(tempPdfPath);
      fs.unlinkSync(tempExcelPath);

      // Return the Excel buffer
      return excelBuffer;
    } catch (error) {
      throw new BadRequestException('Failed to convert PDF to Excel');
    }
  }

}
