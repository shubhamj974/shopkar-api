import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CategoryCreationAttrs } from '../dto/category.dto';

@Table
export class Category extends Model<Category , CategoryCreationAttrs> {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
    comment: 'Category name',
  })
  declare name: string | null;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Description for category',
  })
  declare description: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Category banner or thumbnail image URL',
  })
  declare imageUrl: string | null;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: 'Parent category for subcategory structure',
  })
  declare parentCategoryId: number | null;

  @BelongsTo(() => Category, { foreignKey: 'parentCategoryId' })
  parentCategory: Category;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: 'Order for sorting display',
  })
  declare displayOrder: number | null;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    comment: 'Whether category is active',
  })
  declare isActive: boolean;

  @HasMany(() => Category, 'parentCategoryId')
  subcategories: Category[];

}
