import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../model/product.model';
import { CreateProductColorOptionDto, ProductDto, ProductExchangeOptionDto, ProductImageDto, ProductOfferDto, ProductOtherDetailsDto, ProductReviewDto } from '../dto/product.dto';
import { Category } from 'src/category/model/category.model';
import { ProductColorOption } from '../model/product-color-options.model';
import { ProductExchangeOption } from '../model/product-exchange-options.model';
import { ProductImage } from '../model/product-images.model';
import { ProductOffer } from '../model/product-offers.model';
import { ProductOtherDetails } from '../model/product-other-details.model';
import { ProductReview } from '../model/product-reviews.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product, 'shubham')
        private productModel: typeof Product,
        @InjectModel(ProductColorOption, 'shubham')
        private productColorOptionModel: typeof ProductColorOption,
        @InjectModel(ProductExchangeOption, 'shubham')
        private productExchangeModel: typeof ProductExchangeOption,
        @InjectModel(ProductImage, 'shubham')
        private productImageModel: typeof ProductImage,
        @InjectModel(ProductOffer, 'shubham')
        private productOfferModel: typeof ProductOffer,
        @InjectModel(ProductOtherDetails, 'shubham')
        private productOtherDetailsModel: typeof ProductOtherDetails,
        @InjectModel(ProductReview, 'shubham')
        private productReviewModel: typeof ProductReview,
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


    async productColor(params: CreateProductColorOptionDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productColorOptionModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product color.');
        }
    }

    async getProductColor(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');

            return await this.productColorOptionModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product color.');
        }
    }

    async getProductExchange(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');
            return await this.productExchangeModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product exchange.');
        }
    }


    async productExchange(params: ProductExchangeOptionDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productExchangeModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product exchange.');
        }
    }

    async getProductImages(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');
            return await this.productImageModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product images.');
        }
    }

    async productImages(params: ProductImageDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productImageModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product images.');
        }
    }

    async getProductOffer(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');
            return await this.productOfferModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product offer.');
        }
    }

    async productOffer(params: ProductOfferDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productOfferModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product offer.');
        }
    }

    async getProductOtherDetails(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');
            return await this.productOtherDetailsModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product other details.');
        }
    }

    async productOtherDetails(params: ProductOtherDetailsDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productOtherDetailsModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product other details.');
        }
    }


    async getProductReview(id: number) {
        try {
            const isValid = await this.productModel.findByPk(id);
            if (!isValid) throw new BadRequestException('Invalid product Id.');
            return await this.productReviewModel.findAll({
                where: { productId: id },
            });
        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to get product review.');
        }
    }


    async productReview(params: ProductReviewDto) {
        try {
            const isValidProd = await this.productModel.findByPk(params.productId);
            if (!isValidProd) {
                throw new BadRequestException('Invalid Product Id.')
            }
            return await this.productReviewModel.create(params);

        } catch (error) {
            throw new BadRequestException(error.message || 'Failed to create product review.');
        }
    }


}