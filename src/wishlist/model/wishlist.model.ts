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
export class Wishlist extends Model<Wishlist> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'User who added the product to wishlist',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Product added to wishlist',
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
