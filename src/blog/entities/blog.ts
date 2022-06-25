import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'blog'}) 
export class BlogEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number

    @Column({
        type: 'char',
        name: 'title'
    })
    title: string

    @Column({
        type: 'char',
        name: 'description'
    })
    description: string

    @Column({
        type: 'int',
        name: 'category'
    })
    category: number

    @Column({
        type: 'char',
        name: 'content'
    })
    content: string

    
    @Column({
        type: 'datetime',
        name: 'datetime'
    })
    datetime: string

    @Column({
        type: 'char',
        name: 'sign'
    })
    sign: string
}