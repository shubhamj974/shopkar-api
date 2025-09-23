import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/category/model/category.model';
import { IProduct } from '../dto/product.dto';

@Table
export class Product extends Model<Product , IProduct> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string | null;

  @Column({ type: DataType.JSON, allowNull: false })
  spec: string[] | null;

  @Column({ type: DataType.FLOAT, allowNull: false, validate: { min: 0 } })
  price: number | null;

  @Column({ type: DataType.FLOAT, allowNull: true, validate: { min: 0 } })
  mrp: number | null;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  stock: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @Column({ type: DataType.STRING, allowNull: true })
  imageUrl: string | null;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
  discountPercent: number;

  @Column({ type: DataType.STRING, allowNull: true })
  brand: string | null;

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
  averageRating: number;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  ratingsCount: number;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  reviewsCount: number;

  @Column({ type: DataType.STRING, allowNull: true })
  sku: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  barcode: string | null;

  @Column({ type: DataType.FLOAT, allowNull: true })
  weight: number | null;

  @Column({ type: DataType.JSON, allowNull: true })
  dimensions: string[] | null;

  @Column({ type: DataType.JSON, allowNull: true })
  colorOptions: string[] | null;

  @Column({ type: DataType.JSON, allowNull: true })
  sizeOptions: string[] | null;

  @Column({ type: DataType.STRING, allowNull: true })
  warranty: string | null;

  @Column({ type: DataType.JSON, allowNull: true })
  tags: string[] | null;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isFeatured: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBestSeller: boolean;

  @Column({ type: DataType.DATE, allowNull: true })
  discountStartDate: Date | null;

  @Column({ type: DataType.DATE, allowNull: true })
  discountEndDate: Date | null;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  soldCount: number;

  @Column({ type: DataType.STRING, allowNull: true })
  metaTitle: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  metaDescription: string | null;

  @Column({type: DataType.JSON,allowNull: true })
  images: string[] | null;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  createdBy: number;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  updatedBy: number;
}

