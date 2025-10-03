import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductOffer } from "../dto/product.dto";

@Table
export class ProductOffer extends Model<ProductOffer , IProductOffer> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  declare type: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare description: string;
}
