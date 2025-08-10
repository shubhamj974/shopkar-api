import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from 'src/product/model/product.model';
import { User } from 'src/user/model/user.model';

@Table
export class Cart extends Model<Cart> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'User who owns this cart item',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Product in the cart',
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: 'Quantity of product in cart',
  })
  quantity: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Price at the time of adding to cart',
  })
  priceAtAddTime: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    comment: 'Active or saved-for-later item',
  })
  isActive: boolean;
}
