import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from 'src/order/model/order.model';
import { Product } from 'src/product/model/product.model';

@Table
export class OrderItem extends Model<OrderItem> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'ID of the order this item belongs to',
  })
  orderId: number;

  @BelongsTo(() => Order)
  order: Order;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'ID of the product in this order',
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Quantity of the product ordered',
  })
  quantity: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Price of the product at the time of order',
  })
  price: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Total price for this product (price × quantity)',
  })
  subtotal: number;
}
