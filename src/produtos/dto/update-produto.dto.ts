import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsPositive, Min } from 'class-validator';
import { CreateProdutosDto } from './create-produto.dto';

export class UpdateProdutosDto extends PartialType(CreateProdutosDto) {
    @IsString()
    name?: string;
  
    @IsNumber()
    @IsPositive()
    valor?: number;
  
    @IsNumber()
    @IsPositive()
    @Min(0)
    quantidade?: number;
}
