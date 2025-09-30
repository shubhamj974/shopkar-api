import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductImage extends Model<ProductImage> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  imageUrl: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isPrimary: boolean;
}
