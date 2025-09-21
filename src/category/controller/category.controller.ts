import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, UseGuards, BadRequestException } from '@nestjs/common';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApiResponse } from 'src/common/utils/response.util';
import { CategoryDto } from '../dto/category.dto';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    async create(@Body() body: CategoryDto) {
        try {
            if (!body) {
                throw new BadRequestException('Invalid category params.')
            }
            return ApiResponse.success(
                'Category create successfully',
                await this.categoryService.create(body)

            )
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get()
    async getCategory() {
        try {
            return ApiResponse.success(
                'Category fetch successfully.',
                await this.categoryService.getCategory()
            )
        } catch (error) {
            return ApiResponse.error(error.message)
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: Partial<Category>,
    ): Promise<Category> {
        return this.categoryService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.categoryService.remove(id);
    }
}
