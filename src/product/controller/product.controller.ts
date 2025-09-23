import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, UseGuards, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApiResponse } from 'src/common/utils/response.util';
import { ProductService } from '../service/product.service';
import { ProductDto } from '../dto/product.dto';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

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

    @Get()
    async getCategory() {
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

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number, @Body() data: any){
        return this.productService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
