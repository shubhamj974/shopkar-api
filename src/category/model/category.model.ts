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
export class Category extends Model<Category, CategoryCreationAttrs> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare name: string | null;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare description: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  declare imageUrl: string | null;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: true })
  declare parentCategoryId: number | null;

  @Column({type: DataType.INTEGER,defaultValue: 0})
  declare displayOrder: number | null;

  @Column({type: DataType.BOOLEAN,defaultValue: true })
  declare isActive: boolean;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  declare slug: string;

  @Column({ type: DataType.JSON, allowNull: true })
  declare filters: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare iconUrl: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare bannerUrl: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare isFeatured: boolean;

  @BelongsTo(() => Category, { foreignKey: 'parentCategoryId' })
  parentCategory: Category;

  @HasMany(() => Category, 'parentCategoryId')
  subcategories: Category[];
}
