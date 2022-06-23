import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'profile'})
export class ProfileEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number;

    @Column({
        type: 'char',
        name: 'name'
    })
    name: string;

    @Column({
        type: 'char',
        name: 'avatar'
    })
    avatar: string;

    @Column({
        type: 'char',
        name: 'mail'
    })
    mail: string;

    @Column({
        type: 'char',
        name: 'feeling_ch'
    })
    feeling_ch: string;

    @Column({
        type: 'char',
        name: 'feeling_en'
    })
    feeling_en: string;
}