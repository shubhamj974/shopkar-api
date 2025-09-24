import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../model/product.model';
import { ProductDto } from '../dto/product.dto';
import { Category } from 'src/category/model/category.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product, 'shubham')
        private productModel: typeof Product,
    ) { }

    async create(params: ProductDto) {
        try {
            const payload = {
                ...params,
                spec: params.spec || null,
                images: params.images || null,
                colorOptions: params.colorOptions || null,
                sizeOptions: params.sizeOptions || null,
                tags: params.tags || null,
                isActive: params.isActive !== undefined ? params.isActive : true,
                isFeatured: params.isFeatured || false,
                isBestSeller: params.isBestSeller || false,
                stock: params.stock || 0,
                discountPercent: params.discountPercent || 0,
                averageRating: params.averageRating || 0,
                ratingsCount: params.ratingsCount || 0,
                reviewsCount: params.reviewsCount || 0,
                soldCount: params.soldCount || 0,
                bankOffer: params.bankOffer,
                exchangeOffer: params.exchangeOffer || null,
                createdBy: params.createdBy || null,
                updatedBy: params.updatedBy || null,
            }
            return await this.productModel.create(payload)
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product');
        }

    }

    async getProduct() {
        try {   
            return await this.productModel.findAndCountAll({
                include : {
                    model : Category
                }
            });               
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to fetch products')
        }
    }

    async findOne(id) { }
    async update(id, params) { }
    async remove(id) { }

}