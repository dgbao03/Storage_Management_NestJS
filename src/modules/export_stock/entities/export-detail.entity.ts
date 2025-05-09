import { ProductSku } from "../../product/entities/product-sku.entity";
import BaseEntity from "../../../databases/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ExportStock } from "./export.entity";

@Entity({ name: "export_stock_details" })
export class ExportStockDetail extends BaseEntity {
    @PrimaryColumn({ name: 'export_stock_id' })
    exportStockId: string;

    @PrimaryColumn({ name: 'sku_id' })
    skuId: number;

    @Column({ name: 'export_quantity' })
    exportQuantity: number;

    @Column({ name: 'export_price' })
    exportPrice: number;

    @ManyToOne(() => ProductSku, productSku => productSku.exportStockDetails)
    @JoinColumn({ name: 'sku_id' })
    productSku: ProductSku;

    @ManyToOne(() => ExportStock, exportStock => exportStock.exportStockDetails)
    @JoinColumn({ name: 'export_stock_id' })
    exportStock: ExportStock;
}
