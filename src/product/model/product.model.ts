import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { Category } from 'src/category/model/category.model';
import { IProduct } from '../dto/product.dto';
import { ProductColorOption } from './product-color-options.model';
import { ProductExchangeOption } from './product-exchange-options.model';
import { ProductImage } from './product-images.model';
import { ProductOffer } from './product-offers.model';
import { ProductOtherDetails } from './product-other-details.model';
import { ProductReview } from './product-reviews.model';

@Table
export class Product extends Model<Product, IProduct> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare name: string;

  @Column({ type: DataType.FLOAT, allowNull: false, validate: { min: 0 } })
  declare price: number | null;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  declare stock: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare categoryId: number;

  @BelongsTo(() => Category)
  declare category: Category;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare isActive: boolean;

  // JSON column for flexible attributes
  @Column({ type: DataType.JSON, allowNull: true })
  declare details: {
    isBestSeller?: boolean;
    averageRating?: number;
    ratingsCount?: number;
    reviewsCount?: number;
    mrp?: number;
    discountPercent?: number;
    discountStartDate?: Date;
    discountEndDate?: Date;
    exchangeOffer?: number;
    bankOffer?: boolean;
    imageUrl?: string;
    spec?: string[];
  } | null;

  // ---------------- Associations ----------------
  @HasMany(() => ProductColorOption)
  declare colors: ProductColorOption[];

  @HasMany(() => ProductExchangeOption)
  declare exchangeOptions: ProductExchangeOption[];

  @HasMany(() => ProductImage)
  declare images: ProductImage[];

  @HasMany(() => ProductOffer)
  declare offers: ProductOffer[];

  @HasOne(() => ProductOtherDetails)
  declare otherDetails: ProductOtherDetails;

  @HasMany(() => ProductReview)
  declare reviews: ProductReview[];
}

