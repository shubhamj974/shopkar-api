import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/role/model/role.model';
import { CreateUserDto } from '../dto/register.dto';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User, 'shubham')
    private userModel: typeof User,
    @InjectModel(Role, 'shubham')
    private roleModel: typeof Role,
  ) { }

  async createUser(dto: CreateUserDto) {
    const role = await this.roleModel.findByPk(dto.roleId);

    if (!dto.email && !dto.phone) {
      throw new BadRequestException('Either email or phone must be provided');
    }

    if(dto.email){
      const existingUser = await this.userModel.findOne({
        where: { email: dto.email },
      });
      if (existingUser) {
        throw new BadRequestException('Email already registered');
      }

    }
    if(dto.phone){
      const existingPhone = await this.userModel.findOne({
        where: { phone: dto.phone },
      });
      if (existingPhone) {
        throw new BadRequestException('Phone already registered');
      }
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const data = {
      firstName: dto.firstName || null,
      lastName: dto.lastName || null,
      email: dto.email || null,
      phone: dto.phone || null,
      password: hashedPassword,
      roleId: dto.roleId || 1,
      isActive: dto.isActive ?? true,
      emailVerified: dto.emailVerified ?? false,
    };
    const user = await this.userModel.create(data);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: [Role] });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id, { include: [Role] });
    if (!user) throw new BadRequestException('User not found');
    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { email: email },
    });
  }

  async updateRefreshToken(id: number, refreshToken: string): Promise<void> {
    await this.userModel.update({ refreshToken }, { where: { id } });
  }
}
