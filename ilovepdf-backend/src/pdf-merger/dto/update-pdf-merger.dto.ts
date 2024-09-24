import { PartialType } from '@nestjs/mapped-types';
import { CreatePdfMergerDto } from './create-pdf-merger.dto';

export class UpdatePdfMergerDto extends PartialType(CreatePdfMergerDto) {}
