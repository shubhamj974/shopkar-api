import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './model/order-items.model';

@Module({
  imports: [SequelizeModule.forFeature([OrderItem], 'shubham')],
  controllers: [],
  providers: [],
})
export class OrderItemModule {}
