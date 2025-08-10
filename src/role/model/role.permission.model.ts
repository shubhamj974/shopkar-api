import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Role } from './role.model';

@Table
export class RolePermission extends Model<RolePermission> {
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, allowNull: false })
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;

  @Column({ type: DataType.STRING, allowNull: false })
  module: string;
  // Example values: 'products', 'orders', 'users', 'dashboard'

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  canRead: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  canWrite: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  canDelete: boolean;
}
