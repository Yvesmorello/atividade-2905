import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProdutoDocument = HydratedDocument<Produtos>;

@Schema()
export class Produtos {
  @Prop()
  name: string;

  @Prop()
  valor: number;

  @Prop()
  quantidade: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produtos);
