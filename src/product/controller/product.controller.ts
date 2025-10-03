import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, UseGuards, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApiResponse } from 'src/common/utils/response.util';
import { ProductService } from '../service/product.service';
import { CreateProductColorOptionDto, ProductDto, ProductExchangeOptionDto, ProductImageDto, ProductOfferDto, ProductOtherDetailsDto, ProductReviewDto } from '../dto/product.dto';

// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async getAllProduct() {
        try {
            return ApiResponse.success(
                'Product fetch successfully.',
                await this.productService.getProduct()
            )
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productService.findOne(id);
    }

    @Get(':id/product')
    async getProductById(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.findProductById(id);
            return ApiResponse.success('Product data.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Get(':id/colors')
    async getProductColor(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductColor(id);
            return ApiResponse.success('Product Color.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Get(':id/exchange')
    async getProductExchange(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductExchange(id);
            return ApiResponse.success('Product Exchange.', res)
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id/images')
    async getProductImages(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductImages(id);
            return ApiResponse.success('Product Images.', res)
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id/offers')
    async getProductOffer(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductOffer(id);
            return ApiResponse.success('Product Offers.', res)
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id/other-details')
    async getProductOtherDetails(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductOtherDetails(id);
            return ApiResponse.success('Product other details.', res)
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id/review')
    async getProductReview(@Param('id', ParseIntPipe) id: number) {
        try {
            const res = await this.productService.getProductReview(id);
            return ApiResponse.success('Product Review.', res)
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number, @Body() data: any) {
        return this.productService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productService.remove(id);
    }

    @Post()
    async create(@Body() body: ProductDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid product params.')
            }
            return ApiResponse.success(
                'Product create successfully',
                await this.productService.create(body)

            )
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }


    @Post('colors')
    async productColor(@Body() body: CreateProductColorOptionDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productColor(body)
            return ApiResponse.success('Product color is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Post('exchange')
    async productExchange(@Body() body: ProductExchangeOptionDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productExchange(body)
            return ApiResponse.success('Product exchange is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Post('images')
    async productImages(@Body() body: ProductImageDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productImages(body)
            return ApiResponse.success('Product images is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Post('offers')
    async productOffer(@Body() body: ProductOfferDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productOffer(body)
            return ApiResponse.success('Product offer is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }

    @Post('review')
    async productReview(@Body() body: ProductReviewDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productReview(body)
            return ApiResponse.success('Product review is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }


    @Post('other-details')
    async productDetails(@Body() body: ProductOtherDetailsDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid params!')
            }
            const res = await this.productService.productOtherDetails(body)
            return ApiResponse.success('Product other details is created successfully.', res)
        } catch (error) {
            return ApiResponse.error(error.message || error)
        }
    }
}
