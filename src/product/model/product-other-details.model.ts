import { Table, ForeignKey, Column, DataType, Model, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class ProductOtherDetails extends Model<ProductOtherDetails> {
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @Column({ type: DataType.FLOAT })
    protectFee: number;

    @Column({ type: DataType.STRING })
    deliveryEstimate: string;

    @Column({ type: DataType.JSON }) // array of strings
    breadcrumbs: string[];

    @Column({ type: DataType.JSON }) // highlights list
    highlights: string[];

    @Column({ type: DataType.JSON }) // storage options
    storageOptions: string[];

    @Column({ type: DataType.JSON }) // description text
    description: string;

    @Column({ type: DataType.JSON }) // delivery info object
    deliveryInfo: any;

    @Column({ type: DataType.JSON }) // payment options
    paymentOptions: any;

    @Column({ type: DataType.JSON }) // seller info
    seller: any;

    @Column({ type: DataType.JSON }) // warranty info
    warranty: any;

    @Column({ type: DataType.JSON }) // other attributes like general, dimensions, etc.
    attributes: any;
}
