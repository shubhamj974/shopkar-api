import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
    comment: 'Category name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Description for category',
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Category banner or thumbnail image URL',
  })
  imageUrl: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: 'Parent category for subcategory structure',
  })
  parentCategoryId: number;

  @BelongsTo(() => Category, { foreignKey: 'parentCategoryId' })
  parentCategory: Category;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: 'Order for sorting display',
  })
  displayOrder: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    comment: 'Whether category is active',
  })
  isActive: boolean;
}
