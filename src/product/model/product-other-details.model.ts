import { Table, ForeignKey, Column, DataType, Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";
import { IProductOtherDetails } from "../dto/product.dto";

@Table
export class ProductOtherDetails extends Model<ProductOtherDetails,IProductOtherDetails> {
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    declare productId: number;

    @BelongsTo(() => Product)
    declare product: Product;

    @Column({ type: DataType.FLOAT })
    declare protectFee: number;

    @Column({ type: DataType.STRING })
    declare deliveryEstimate: string;

    @Column({ type: DataType.JSON }) // array of strings
    declare breadcrumbs: string[];

    @Column({ type: DataType.JSON }) // highlights list
    declare highlights: string[];

    @Column({ type: DataType.JSON }) // storage options
    declare storageOptions: string[];

    @Column({ type: DataType.JSON }) // description text
    declare description: string;

    @Column({ type: DataType.JSON }) // delivery info object
    declare deliveryInfo: any;

    @Column({ type: DataType.JSON }) // payment options
    declare paymentOptions: any;

    @Column({ type: DataType.JSON }) // seller info
    declare seller: any;

    @Column({ type: DataType.JSON }) // warranty info
    declare warranty: any;

    @Column({ type: DataType.JSON }) // other attributes like general, dimensions, etc.
    declare attributes: any;
}
