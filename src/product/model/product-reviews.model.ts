import { Table, ForeignKey, Column, DataType,Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductReview } from "../dto/product.dto";

@Table
export class ProductReview extends Model<ProductReview,IProductReview> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare rating: number;

  @Column({ type: DataType.STRING })
  declare title: string;

  @Column({ type: DataType.TEXT })
  declare text: string;

  @Column({ type: DataType.STRING })
  declare reviewer: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare verified: boolean;

  @Column({ type: DataType.STRING })
  declare location: string;

  @Column({ type: DataType.STRING })
  declare timeAgo: string;

  @Column({ type: DataType.INTEGER })
  declare helpfulVotes: number;

  @Column({ type: DataType.INTEGER })
  declare unhelpfulVotes: number;

  @Column({ type: DataType.STRING })
  declare permalink: string;
}
