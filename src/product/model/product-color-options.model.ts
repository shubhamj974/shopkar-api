import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductColorOption } from "../dto/product.dto";

@Table
export class ProductColorOption extends Model<ProductColorOption ,IProductColorOption> {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare img: string;
}
