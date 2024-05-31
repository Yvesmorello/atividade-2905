import { IsString, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateProdutosDto {

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  quantidade: number;
}
