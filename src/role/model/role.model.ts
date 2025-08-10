import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/model/user.model';
import { RolePermission } from './role.permission.model';
import { IRole } from '../interface/role.interface';

@Table
export class Role extends Model<Role, IRole> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare description: string; // Example: 'Full system access', 'Manage own products'

  @HasMany(() => User)
  declare users: User[];

  @HasMany(() => RolePermission)
  declare permissions: RolePermission[];
}
