import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/category/model/category.model';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    unique: true,
    comment: 'Product name (unique)',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Detailed product description',
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: { min: 0 },
    comment: 'Selling price',
  })
  price: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    validate: { min: 0 },
    comment: 'Original MRP price',
  })
  mrp: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'Available stock quantity',
  })
  stock: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Reference to category',
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Main product image URL',
  })
  imageUrl: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    comment: 'Whether product is active',
  })
  isActive: boolean;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: 0,
    comment: 'Discount percentage',
  })
  discountPercent: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: 0,
    comment: 'Average customer rating',
  })
  averageRating: number;
}
