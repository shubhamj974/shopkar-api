import { Table, ForeignKey, Column, DataType, Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductExchangeOption extends Model<ProductExchangeOption> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({ type: DataType.STRING })
  type: string;

  @Column({ type: DataType.STRING })
  price: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  available: boolean;

  @Column({ type: DataType.STRING })
  note: string;
}
