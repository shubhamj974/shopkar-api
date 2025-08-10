import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './model/order.model';

@Module({
  imports: [SequelizeModule.forFeature([Order], 'shubham')],
  controllers: [],
  providers: [],
})
export class OrderModule {}
