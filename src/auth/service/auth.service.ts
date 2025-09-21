import { BadRequestException, Injectable } from '@nestjs/common';
import { loginDto } from '../dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(params: loginDto) {
    // Find user by email
    const user = await this.userService.findOneByEmail(params.email);
    if (!user) {
      throw new BadRequestException('User does not exist!');
    }
    console.log(user);

    const isPasswordValid = await bcrypt.compare(
      params.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password!');
    }

    const userData = user.get({ plain: true }) as any;
    delete userData.password;
    // Create short-lived access token
    const payload = { username: user.email, sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: '10m',
    });

    // Create long-lived refresh token
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '8h',
    });
    return {
      accessToken,
      refreshToken,
      user: userData,
    };
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      const payload = await this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
      return payload;
    } catch (error) {
      return false;
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.userService.findOne(payload.sub);
      if (!user) throw new BadRequestException('User not found');

      const newAccessToken = await this.jwtService.signAsync(
        { username: user.email, sub: user.id },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '10m',
        },
      );
      return { accessToken: newAccessToken };
    } catch (error) {
      throw new BadRequestException('Invalid refresh token');
    }
  }
}
