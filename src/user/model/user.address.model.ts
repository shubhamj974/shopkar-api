import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Address extends Model<Address> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.STRING, allowNull: false })
  fullName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  pincode: string;

  @Column({ type: DataType.STRING, allowNull: false })
  state: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addressLine1: string;

  @Column({ type: DataType.STRING, allowNull: true })
  addressLine2?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  landmark?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDefault: boolean;
}
