import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../model/role.model';
import { RoleDto } from '../dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role, 'shubham')
    private roleModel: typeof Role,
  ) {}

  async createRole(params: RoleDto) {
    try {
      return this.roleModel.create(params);
    } catch (error) {
      return error;
    }
  }
}
