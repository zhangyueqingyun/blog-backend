import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'user'}) 
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number;

    @Column({
        type: 'char',
        name: 'username'
    })
    username: string;

    @Column({
        type: 'char',
        name: 'password'
    })
    password: string;
}