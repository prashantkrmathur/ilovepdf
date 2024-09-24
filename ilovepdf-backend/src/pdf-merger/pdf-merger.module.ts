import { Module } from '@nestjs/common';
import { PdfMergerService } from './pdf-merger.service';
import { PdfMergerController } from './pdf-merger.controller';

@Module({
  controllers: [PdfMergerController],
  providers: [PdfMergerService],
})
export class PdfMergerModule {}
