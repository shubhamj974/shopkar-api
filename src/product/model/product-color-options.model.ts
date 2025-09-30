import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductColorOption extends Model {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  img: string;
}
