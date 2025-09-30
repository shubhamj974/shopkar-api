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
            const corePayload = {
                name: params.name,
                price: params.price,
                stock: params.stock ?? 0,
                categoryId: params.categoryId,
                isActive: params.isActive ?? true,
            };

            const detailsPayload = {
                description: params.details?.description || null,
                brand: params.details?.brand || null,
                sku: params.details?.sku || null,
                barcode: params.details?.barcode || null,
                mrp: params.details?.mrp || null,
                discountPercent: params.details?.discountPercent || null,
                discountStartDate: params.details?.discountStartDate || null,
                discountEndDate: params.details?.discountEndDate || null,
                imageUrl: params.details?.imageUrl || null,
                averageRating: params.details?.averageRating ?? 0,
                ratingsCount: params.details?.ratingsCount ?? 0,
                reviewsCount: params.details?.reviewsCount ?? 0,
                soldCount: params.details?.soldCount ?? 0,
                isFeatured: params.details?.isFeatured ?? false,
                isBestSeller: params.details?.isBestSeller ?? false,
                bankOffer: params.details?.bankOffer ?? false,
                exchangeOffer: params.details?.exchangeOffer ?? 0,
                spec: params.details?.spec || null,
                warranty: params.details?.warranty || null,
                tags: params.details?.tags || null,
            };

            // Merge core + details
            const payload = {
                ...corePayload,
                details: detailsPayload,
            };

            return await this.productModel.create(payload);
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product');
        }
    }

    async getProduct() {
        try {
            const result = await this.productModel.findAndCountAll({
                include: {
                    model: Category,
                },
            });
            return await result;
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to fetch products');
        }
    }

    async findOne(id) { }
    async update(id, params) { }
    async remove(id) { }

}