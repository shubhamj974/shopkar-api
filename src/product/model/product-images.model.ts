import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductImage } from "../dto/product.dto";

@Table
export class ProductImage extends Model<ProductImage,IProductImage> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  declare imageUrl: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare isPrimary: boolean;
}
