import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'sign'}) 
export class SignEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number

    @Column({
        type: 'char',
        name: 'name'
    })
    name: string

    @Column({
        type: 'char',
        name: 'icon'
    })
    icon: string
}