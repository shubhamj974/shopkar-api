import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wishlist } from './model/wishlist.model';

@Module({
  imports: [SequelizeModule.forFeature([Wishlist], 'shubham')],
  controllers: [],
  providers: [],
})
export class WishListModule {}
