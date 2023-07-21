export class Product { }
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    descrip: string;

    @Column('text')
    sex: string;

    @Column('text')
    catelog: string;

    @Column('text')
    prices: string;
}
