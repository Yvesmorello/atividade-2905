import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { MultiplyValueMiddleware } from './produtos/middleware/multiply-value.middleware';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MultiplyValueMiddleware)
      .forRoutes('*'); // Aplica o middleware globalmente a todas as rotas
  }
}

@Module({
  imports: [ProdutosModule], // Importe o módulo ProdutosModule no AppModule
})
export class AppModule {}
