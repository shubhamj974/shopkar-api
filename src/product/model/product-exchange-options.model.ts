import { Table, ForeignKey, Column, DataType, Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductExchangeOption } from "../dto/product.dto";

@Table
export class ProductExchangeOption extends Model<ProductExchangeOption , IProductExchangeOption> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.STRING })
  declare type: string;

  @Column({ type: DataType.STRING })
  declare price: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare available: boolean;

  @Column({ type: DataType.STRING })
  declare note: string;
}
