import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Product], 'shubham')],
  controllers: [],
  providers: [],
})
export class ProductModule {}
