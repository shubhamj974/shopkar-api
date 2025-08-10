import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { Role } from 'src/role/model/role.model';
import { Address } from './model/user.address.model';
import { Cart } from 'src/cart/model/cart.model';
import { Order } from 'src/order/model/order.model';
import { Wishlist } from 'src/wishlist/model/wishlist.model';

@Module({
  imports: [
    SequelizeModule.forFeature(
      [User, Role, Address, Cart, Order, Wishlist],
      'shubham',
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
