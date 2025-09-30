import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  Min,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';


export class DetailsDto {
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() brand?: string;
  @IsOptional() @IsString() sku?: string;
  @IsOptional() @IsString() barcode?: string;
  @IsOptional() @IsNumber() mrp?: number;
  @IsOptional() @IsNumber() discountPercent?: number;
  @IsOptional() @Type(() => Date) discountStartDate?: Date;
  @IsOptional() @Type(() => Date) discountEndDate?: Date;
  @IsOptional() @IsString() imageUrl?: string;
  @IsOptional() @IsNumber() averageRating?: number;
  @IsOptional() @IsNumber() ratingsCount?: number;
  @IsOptional() @IsNumber() reviewsCount?: number;
  @IsOptional() @IsNumber() soldCount?: number;
  @IsOptional() @IsBoolean() isFeatured?: boolean;
  @IsOptional() @IsBoolean() isBestSeller?: boolean;
  @IsOptional() @IsBoolean() bankOffer?: boolean;
  @IsOptional() @IsNumber() exchangeOffer?: number;
  @IsOptional() @IsArray() @IsString({ each: true }) spec?: string[];
  @IsOptional() @IsString() warranty?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) tags?: string[];
}
export class ProductDto {
  @IsString() @IsNotEmpty() name: string;
  @IsNumber() @Min(0) price: number;
  @IsNumber() @IsOptional() @Min(0) stock?: number;
  @IsBoolean() @IsOptional() isActive?: boolean;
  @IsNumber() @IsNotEmpty() categoryId: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => DetailsDto)
  details?: DetailsDto;
}






export interface IProduct {
  name: string;
  price: number;
  stock?: number | null;
  isActive?: boolean | null;
  categoryId: number;

  details?: {
    description?: string | null;
    brand?: string | null;
    sku?: string | null;
    barcode?: string | null;
    mrp?: number | null;
    discountPercent?: number | null;
    discountStartDate?: Date | null;
    discountEndDate?: Date | null;
    imageUrl?: string | null;
    averageRating?: number | null;
    ratingsCount?: number | null;
    reviewsCount?: number | null;
    soldCount?: number | null;
    isFeatured?: boolean | null;
    isBestSeller?: boolean | null;
    bankOffer?: boolean | null;
    exchangeOffer?: number | null;
    spec?: string[] | null;
    warranty?: string | null;
    tags?: string[] | null;
  } | null;
}
