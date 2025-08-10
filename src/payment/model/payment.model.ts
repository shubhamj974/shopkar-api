import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from 'src/order/model/order.model';

@Table
export class Payment extends Model<Payment> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Order ID linked to this payment',
  })
  orderId: number;

  @BelongsTo(() => Order)
  order: Order;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Payment gateway transaction ID (e.g., Razorpay, Paytm, Stripe)',
  })
  paymentId: string;

  @Column({
    type: DataType.ENUM('pending', 'successful', 'failed'),
    defaultValue: 'pending',
    comment: 'Current payment status',
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Payment method used (e.g., UPI, Card, COD)',
  })
  paymentMethod: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Amount paid for the order',
  })
  amount: number;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    comment: 'Any additional payment details returned by the gateway',
  })
  paymentDetails: Record<string, any>;
}
