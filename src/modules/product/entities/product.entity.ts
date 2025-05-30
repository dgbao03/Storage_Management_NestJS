import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";
import BaseEntity from "../../../databases/base.entity";
import { ProductSku } from "./product-sku.entity";

@Entity({ name: 'products' })
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar',  length: 255 })
    name: string;

    @OneToMany(() => Option, (option) => option.product)
    options: Option[];

    @OneToMany(() => ProductSku, (sku) => sku.product)
    productSkus: ProductSku[];
}
