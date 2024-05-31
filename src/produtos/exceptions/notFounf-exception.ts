import { NotFoundException } from '@nestjs/common';

export class ProdutoNotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`Produto com o ID '${id}' não encontrado.`);
  }
}
