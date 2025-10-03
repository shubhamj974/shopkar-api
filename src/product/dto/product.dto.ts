import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  Min,
  ValidateNested,
  IsArray,
  IsInt,
  IsObject,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

//Product
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

//Color
export class CreateProductColorOptionDto {
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  img: string;
}

export class UpdateProductColorOptionDto {
  @Type(() => Number)
  @IsInt()
  productId?: number;

  @IsString()
  name?: string;

  @IsString()
  img?: string;
}


export interface IProductColorOption {
  productId: number;
  name: string;
  img: string;
}

// Exchange
export class ProductExchangeOptionDto {
  @IsInt()
  productId: number;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsString()
  note?: string;
}

export interface IProductExchangeOption {
  productId: number;
  type?: string | null;
  price?: string | null;
  available?: boolean;
  note?: string | null;
}

// Images

export class ProductImageDto {
  @IsInt()
  productId: number;

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}

export interface IProductImage {
  productId: number;
  imageUrl: string;
  isPrimary?: boolean;
}

// Offer
export class ProductOfferDto {
  @IsInt()
  productId: number;

  @IsString()
  type: string;

  @IsString()
  description: string;
}

export interface IProductOffer {
  productId: number;
  type: string;
  description: string;
}

//Others Details
export class ProductOtherDetailsDto {
  @IsInt()
  productId: number;

  @IsOptional()
  @IsNumber()
  protectFee?: number;

  @IsOptional()
  @IsString()
  deliveryEstimate?: string;

  @IsOptional()
  @IsArray()
  breadcrumbs?: string[];

  @IsOptional()
  @IsArray()
  highlights?: string[];

  @IsOptional()
  @IsArray()
  storageOptions?: string[];

  @IsOptional()
  @IsObject()
  description?: any;

  @IsOptional()
  @IsObject()
  deliveryInfo?: any;

  @IsOptional()
  @IsObject()
  paymentOptions?: any;

  @IsOptional()
  @IsObject()
  seller?: any;

  @IsOptional()
  @IsObject()
  warranty?: any;

  @IsOptional()
  @IsObject()
  attributes?: any;
}


export interface IProductOtherDetails {
  productId: number;
  protectFee?: number;
  deliveryEstimate?: string;
  breadcrumbs?: string[];
  highlights?: string[];
  storageOptions?: string[];
  description?: any;
  deliveryInfo?: any;
  paymentOptions?: any;
  seller?: any;
  warranty?: any;
  attributes?: any;
}


//Review
export class ProductReviewDto {
  @IsInt( )
  productId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  reviewer?: string;

  @IsOptional()
  @IsBoolean( )
  verified?: boolean;

  @IsOptional()
  @IsString( )
  location?: string;

  @IsOptional()
  @IsString( )
  timeAgo?: string;

  @IsOptional()
  @IsInt( )
  helpfulVotes?: number;

  @IsOptional()
  @IsInt( )
  unhelpfulVotes?: number;

  @IsOptional()
  @IsString( )
  permalink?: string;
}

export interface IProductReview {
  productId: number;
  rating: number;
  title?: string;
  text?: string;
  reviewer?: string;
  verified?: boolean;
  location?: string;
  timeAgo?: string;
  helpfulVotes?: number;
  unhelpfulVotes?: number;
  permalink?: string;
}









