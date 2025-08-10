import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './model/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart], 'shubham')],
  controllers: [],
  providers: [],
})
export class CartModule {}
