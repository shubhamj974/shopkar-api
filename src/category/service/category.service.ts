import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from '../model/category.model';
import { CategoryDto } from '../dto/category.dto';
import { CreationAttributes } from 'sequelize/types/model';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category, 'shubham')
        private categoryModel: typeof Category,
    ) { }

    async create(params: CategoryDto) {
        const sequelize = this.categoryModel.sequelize;
        if (!sequelize) {
            throw new Error('Sequelize instance not available in Category model');
        }
        const transaction = await sequelize.transaction();
        try {
            const cat = await this.categoryModel.findOne({
                where: { name: params.name },
                transaction,
            });
            if (cat) {
                throw new BadRequestException('Category already exists.');
            }
            const parentPayload: CreationAttributes<Category> = {
                name: params.name,
                description: params.description || null,
                imageUrl: params.imageUrl || null,
                displayOrder: params.displayOrder || 0,
                isActive: params.isActive !== undefined ? params.isActive : true,
                parentCategoryId: null,
                slug : params.slug || null,
                filters : params.filters || null,
                metaTitle : params.metaTitle || null,
                metaDescription : params.metaDescription || null,
                iconUrl : params.iconUrl || null,
                bannerUrl : params.bannerUrl || null,
                isFeatured : params.isFeatured || null,
                createdBy : params.createdBy || null,
                updatedBy : params.updatedBy || null
            };
            const parent = await this.categoryModel.create(parentPayload, { transaction });
            if (params.subcategories && params.subcategories.length) {
                for (const sub of params.subcategories) {
                    const existingSub = await this.categoryModel.findOne({
                        where: { name: sub.name },
                        transaction,
                    });
                    if (existingSub) {
                        throw new BadRequestException(`Subcategory "${sub.name}" already exists.`);
                    }
                    const childPayload = {
                        name: sub.name,
                        description: sub.description || null,
                        imageUrl: sub.imageUrl || null,
                        displayOrder: sub.displayOrder || 0,
                        isActive: sub.isActive !== undefined ? sub.isActive : true,
                        parentCategoryId: parent.id,
                        slug : params.slug || null,
                        filters : params.filters || null,
                        metaTitle : params.metaTitle || null,
                        metaDescription : params.metaDescription || null,
                        iconUrl : params.iconUrl || null,
                        bannerUrl : params.bannerUrl || null,
                        isFeatured : params.isFeatured || null,
                        createdBy : params.createdBy || null,
                        updatedBy : params.updatedBy || null
                    };

                    const subcat = await this.categoryModel.create(childPayload, { transaction });
                    if (sub.subcategories && sub.subcategories.length) {
                        for (const nested of sub.subcategories) {
                            const existingNested = await this.categoryModel.findOne({
                                where: { name: nested.name },
                                transaction,
                            });
                            if (existingNested) {
                                throw new BadRequestException(`Nested subcategory "${nested.name}" already exists.`);
                            }

                            const nestedPayload = {
                                name: nested.name,
                                description: nested.description || null,
                                imageUrl: nested.imageUrl || null,
                                displayOrder: nested.displayOrder || 0,
                                isActive: nested.isActive !== undefined ? nested.isActive : true,
                                parentCategoryId: subcat.id,
                                slug : params.slug || null,
                                filters : params.filters || null,
                                metaTitle : params.metaTitle || null,
                                metaDescription : params.metaDescription || null,
                                iconUrl : params.iconUrl || null,
                                bannerUrl : params.bannerUrl || null,
                                isFeatured : params.isFeatured || null,
                                createdBy : params.createdBy || null,
                                updatedBy : params.updatedBy || null
                            };

                            await this.categoryModel.create(nestedPayload, { transaction });
                        }
                    }
                }
            }

            await transaction.commit();
            return parent;
        } catch (error) {
            await transaction.rollback();
            throw new BadRequestException(error.message || 'Failed to create category');
        }
    }


    async getCategory() {
        try {
            const categories = await this.categoryModel.findAll({
                where: { isActive: true, parentCategoryId: null },
                include: [
                    {
                        model: Category,
                        as: 'subcategories',
                        where: { isActive: true },
                        required: false,
                        include: [
                            {
                                model: Category,
                                as: 'subcategories',
                                where: { isActive: true },
                                required: false,
                                include: [
                                    {
                                        model: Category,
                                        as: 'subcategories',
                                        where: { isActive: true },
                                        required: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
                order: [
                    ['displayOrder', 'ASC'],
                    [{ model: Category, as: 'subcategories' }, 'displayOrder', 'ASC'],
                ],
            });

            return categories;
        } catch (error) {
            throw new BadRequestException(
                error?.message || 'Failed to fetch categories'
            );
        }
    }


    async findOne(id: number): Promise<Category> {
        const category = await this.categoryModel.findByPk(id, {
            include: [{ model: Category, as: 'subcategories' }],
        });
        if (!category) throw new NotFoundException('Category not found');
        return category;
    }

    async update(id: number, data: Partial<Category>): Promise<Category> {
        const category = await this.findOne(id);
        return category.update(data);
    }

    async remove(id: number): Promise<void> {
        const category = await this.findOne(id);
        await category.destroy();
    }
}
