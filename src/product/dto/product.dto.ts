import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsArray, IsDate, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @IsString({ each: true })
    spec: string[];

    @IsNumber()
    @Min(0)
    price: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    mrp?: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    stock?: number;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    images?: string[];

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @IsNumber()
    @IsOptional()
    @Min(0)
    discountPercent?: number;

    @IsString()
    @IsOptional()
    brand?: string;

    @IsNumber()
    @IsOptional()
    @Min(0)
    averageRating?: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    ratingsCount?: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    reviewsCount?: number;

    @IsString()
    @IsOptional()
    sku?: string;

    @IsString()
    @IsOptional()
    barcode?: string;

    @IsNumber()
    @IsOptional()
    weight?: number;

    @IsArray()
    @IsOptional()
    dimensions?: string[];

    @IsArray()
    @IsOptional()
    colorOptions?: string[];

    @IsArray()
    @IsOptional()
    sizeOptions?: string[];

    @IsString()
    @IsOptional()
    warranty?: string;

    @IsArray()
    @IsOptional()
    tags?: string[];

    @IsBoolean()
    @IsOptional()
    isFeatured?: boolean;

    @IsBoolean()
    @IsOptional()
    isBestSeller?: boolean;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    discountStartDate?: Date;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    discountEndDate?: Date;

    @IsNumber()
    @IsOptional()
    soldCount?: number;

    @IsString()
    @IsOptional()
    metaTitle?: string;

    @IsString()
    @IsOptional()
    metaDescription?: string;

    @IsNumber()
    @IsOptional()
    createdBy?: number;

    @IsNumber()
    @IsOptional()
    updatedBy?: number;
}



export interface IProduct {
  name: string;
  description?: string | null;
  spec: string[] | null;
  price: number | null;
  mrp?: number | null;
  stock?: number | null;
  categoryId: number | null;
  imageUrl?: string | null;
  images?: string[] | null;
  isActive?: boolean | null;
  discountPercent?: number | null;
  brand?: string | null;
  averageRating?: number | null;
  ratingsCount?: number | null;
  reviewsCount?: number | null;
  sku?: string | null;
  barcode?: string | null;
  weight?: number | null;
  dimensions?: string[] | null;
  colorOptions?: string[] | null;
  sizeOptions?: string[] | null;
  warranty?: string | null;
  tags?: string[] | null;
  isFeatured?: boolean | null;
  isBestSeller?: boolean | null;
  discountStartDate?: Date | null;
  discountEndDate?: Date | null;
  soldCount?: number | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  createdBy?: number | null;
  updatedBy?: number | null;
}
