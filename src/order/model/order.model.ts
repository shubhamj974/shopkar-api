import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Address } from 'src/user/model/user.address.model';
import { User } from 'src/user/model/user.model';

@Table
export class Order extends Model<Order> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'ID of the user who placed the order',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Shipping address ID',
  })
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Total amount for the order',
  })
  totalAmount: number;

  @Column({
    type: DataType.ENUM(
      'pending',
      'processing',
      'shipped',
      'delivered',
      'cancelled',
    ),
    defaultValue: 'pending',
    comment: 'Current status of the order',
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Payment method (COD, UPI, Card, etc.)',
  })
  paymentMethod: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Transaction ID for online payments',
  })
  transactionId: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    comment: 'Order placed date and time',
  })
  orderDate: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    comment: 'Delivery date when status is delivered',
  })
  deliveredAt: Date;
}
