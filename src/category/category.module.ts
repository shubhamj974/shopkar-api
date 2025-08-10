import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './model/category.model';

@Module({
  imports: [SequelizeModule.forFeature([Category], 'shubham')],
  controllers: [],
  providers: [],
})
export class CategoryModule {}
