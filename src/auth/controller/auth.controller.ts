import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { loginDto } from '../dto/login.dto';
import { AuthService } from '../service/auth.service';
import { ApiResponse } from 'src/common/utils/response.util';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: loginDto) {
    try {
      console.log(body);

      if (!body) {
        throw new BadRequestException('Invalid param!');
      }
      const user = await this.authService.login(body);
      console.log(user);

      return ApiResponse.success('successfuly login!', user);
    } catch (err) {
      console.log('authError::', err);
      return ApiResponse.error(err.message);
    }
  }
}
