import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { ProductOtherDetails } from './model/product-other-details.model';
import { ProductOffer } from './model/product-offers.model';
import { ProductExchangeOption } from './model/product-exchange-options.model';
import { ProductColorOption } from './model/product-color-options.model';
import { ProductReview } from './model/product-reviews.model';
import { ProductImage } from './model/product-images.model';

@Module({
  imports: [
    SequelizeModule.forFeature(
      [
        Product,
        ProductOtherDetails,
        ProductOffer,
        ProductExchangeOption,
        ProductColorOption,
        ProductReview,
        ProductImage
      ], 'shubham'
    )],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
