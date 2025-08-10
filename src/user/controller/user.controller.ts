import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/register.dto';
import { UserService } from '../service/user.service';
import { error } from 'console';
import { ApiResponse } from 'src/common/utils/response.util';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    try {
      if (!body) {
        throw new error('Invalida params!');
      }
      const res = await this.userService.createUser(body);
      return ApiResponse.success('User registered successfully', res);
    } catch (err) {
      return ApiResponse.error(err.message || 'Something went wrong');
    }
  }
}
