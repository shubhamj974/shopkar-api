import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Role } from 'src/role/model/role.model';
import { Address } from './user.address.model';
import { Cart } from 'src/cart/model/cart.model';
import { Order } from 'src/order/model/order.model';
import { Wishlist } from 'src/wishlist/model/wishlist.model';
import { UserCreationAttrs } from '../interface/user.interface';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  declare firstName: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  declare lastName: string | null;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  declare email: string | null;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  declare phone: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  declare password: string

  @Column({ type: DataType.STRING, allowNull: true})
  declare refreshToken?: string | null;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, allowNull: true,defaultValue : 1 })
  declare roleId: number;

  @BelongsTo(() => Role)
  declare role: Role;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare isActive: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare emailVerified: boolean;

  @HasMany(() => Address)
  declare addresses: Address[];

  @HasMany(() => Cart)
  declare carts: Cart[];

  @HasMany(() => Order)
  declare orders: Order[];

  @HasMany(() => Wishlist)
  declare wishlists: Wishlist[];
}
