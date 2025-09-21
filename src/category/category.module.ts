import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './model/category.model';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';

@Module({
  imports: [SequelizeModule.forFeature([Category], 'shubham')],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
