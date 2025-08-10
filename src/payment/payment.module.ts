import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';

@Module({
  imports: [SequelizeModule.forFeature([Payment], 'shubham')],
  controllers: [],
  providers: [],
})
export class PaymentModule {}
