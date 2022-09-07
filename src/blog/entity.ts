import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'blog'}) 
export class BlogEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number;

    @Column({
        type: 'char',
        name: 'title'
    })
    title: string;

    @Column({
        type: 'char',
        name: 'description'
    })
    description: string;

    @Column({
        type: 'char',
        name: 'oss_path'
    })
    ossPath: string;
    
    @Column({
        type: 'datetime',
        name: 'datetime'
    })
    datetime: string;

    @Column({
        type: 'int',
        name: 'sign_id'
    })
    signId: number;
    
    @Column({
        type: 'int',
        name: 'category_id'
    })
    categoryId: number;

    @Column({
        type: 'int',
        name: 'reading_amount'
    })
    readingAmount: number;
}