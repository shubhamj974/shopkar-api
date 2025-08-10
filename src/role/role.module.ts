import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './model/role.model';
import { RoleController } from './controller/role.controller';
import { RoleService } from './service/role.service';
import { RolePermission } from './model/role.permission.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, RolePermission], 'shubham')],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
