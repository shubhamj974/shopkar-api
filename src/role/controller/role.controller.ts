import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from '../service/role.service';
import { RoleDto } from '../dto/role.dto';
import { ApiResponse } from 'src/common/utils/response.util';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('')
  async createRole(@Body() body: RoleDto) {
    try {
      if (!body) {
        throw new BadRequestException('invalid params!');
      }
      const res = await this.roleService.createRole(body);
      return ApiResponse.success('Role created successfully', res);
    } catch (err) {
      console.log(err);
      return ApiResponse.error(err.message || 'Something went wrong');
    }
  }
}
