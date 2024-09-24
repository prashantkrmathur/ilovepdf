import { Injectable, BadRequestException } from '@nestjs/common';
import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs';

@Injectable()
export class PdfMergerService {
  
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

    const mergedPdfBytes = await mergedPdf.save(); // returns a Uint8Array

    // Convert Uint8Array to Buffer
    return Buffer.from(mergedPdfBytes);
  }
}
