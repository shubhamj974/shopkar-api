import { Table, ForeignKey, Column, DataType,Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductReview extends Model<ProductReview> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({ type: DataType.INTEGER, allowNull: false })
  rating: number;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.TEXT })
  text: string;

  @Column({ type: DataType.STRING })
  reviewer: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  verified: boolean;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  timeAgo: string;

  @Column({ type: DataType.INTEGER })
  helpfulVotes: number;

  @Column({ type: DataType.INTEGER })
  unhelpfulVotes: number;

  @Column({ type: DataType.STRING })
  permalink: string;
}
