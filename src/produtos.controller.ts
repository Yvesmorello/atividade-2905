import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutosDto } from './produtos/dto/create-produto.dto';
import { UpdateProdutosDto } from './produtos/dto/update-produto.dto';
import { ProdutoNotFoundException } from './produtos/exceptions/notFounf-exception';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutosDto: CreateProdutosDto) {
    try {
      return await this.produtosService.create(createProdutosDto);
    } catch (error) {
      throw new ConflictException('Erro ao criar o produto.');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.produtosService.findAll();
    } catch (error) {
      throw new BadRequestException('Erro ao buscar os produtos.');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const produto = await this.produtosService.findById(id);
      if (!produto) {
        throw new ProdutoNotFoundException(id); 
      }
      return produto;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar o produto.');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProdutosDto: UpdateProdutosDto) {
    try {
      const produto = await this.produtosService.update(id, updateProdutosDto);
      if (!produto) {
        throw new NotFoundException('Produto não encontrado para atualização.');
      }
      return produto;
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar o produto.');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const produto = await this.produtosService.remove(id);
      if (!produto) {
        throw new NotFoundException('Produto não encontrado para exclusão.');
      }
      return produto;
    } catch (error) {
      throw new BadRequestException('Erro ao excluir o produto.');
    }
  }
}
