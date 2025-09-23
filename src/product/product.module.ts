import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
  imports: [SequelizeModule.forFeature([Product], 'shubham')],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
