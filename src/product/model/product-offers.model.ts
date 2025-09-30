import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductOffer extends Model<ProductOffer> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;
}
