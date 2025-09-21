import { BadRequestException, Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { loginDto } from '../dto/login.dto';
import { AuthService } from '../service/auth.service';
import { ApiResponse } from 'src/common/utils/response.util';
import { Response } from 'express';
import { Request } from 'express';
import { JwtAuthGuard } from '../jwt.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body: loginDto, @Res({ passthrough: true }) res: Response) {
    try {
      console.log(body);

      if (!body) {
        throw new BadRequestException('Invalid param!');
      }
      const { accessToken, refreshToken, user } = await this.authService.login(body);
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',

        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return ApiResponse.success('successfuly login!', { accessToken, user });
    } catch (err) {
      console.log('authError::', err);
      return ApiResponse.error(err.message);
    }
  }

  @Post('refresh')
  async refresh(@Req() req: Request,
    @Res({ passthrough: true }) res: Response) {
    try {
      const refreshToken = req.cookies['refreshToken'];
      if (!refreshToken) {
        throw new BadRequestException('No refresh token found');
      }
      const accessToken = await this.authService.refreshToken(refreshToken);
      return ApiResponse.success(
        'Refresh token successfully',
        accessToken
      );
    } catch (error) {
      return ApiResponse.error(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('validate')
  async validate(@Body() body){
    try {
      if(!body.accessToken){
        throw new BadRequestException('Invalid params.')
      }
      return ApiResponse.success(
        'Access token validate successfully',
        await this.authService.validateToken(body.accessToken)
      )
    } catch (error) {
      return ApiResponse.error(error.message)
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    return ApiResponse.success('Logged out successfully')
  }
}
