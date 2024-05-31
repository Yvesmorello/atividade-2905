import { Injectable } from '@nestjs/common';
import { CreateProdutosDto } from './produtos/dto/create-produto.dto';
import { UpdateProdutosDto } from './produtos/dto/update-produto.dto';
import { Produtos } from './produtos/schemas/produtos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produtos.name) private ProdutosModel: Model<Produtos>) {}

  create(createProdutosDto: CreateProdutosDto) {
    const createdProdutos = this.ProdutosModel.create(createProdutosDto);
    return createdProdutos;
  }

  findAll() {
    return this.ProdutosModel.find();
  }

  findById(id: string) {
    return this.ProdutosModel.findById(id);
  }

  update(id: string, updateProdutosDto: UpdateProdutosDto) {
    return `This action updates a #${id} Produtos`;
  }

  remove(id: string) {
    return this.ProdutosModel.findByIdAndDelete(id);
  }
}
