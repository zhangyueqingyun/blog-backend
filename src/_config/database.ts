import {UserEntity} from '@/user/entity';
import {ProfileEntity} from '@/profile/entity';
import {BlogEntity} from '@/blog/entity';
import {CategoryEntity} from '@/category/entity';
import {SignEntity} from '@/sign/entity';
import {mysqlLocalConf} from '../../config/database';

export const mysqlConf: any = {
    ...mysqlLocalConf,
    entities: [UserEntity, ProfileEntity, BlogEntity, CategoryEntity, SignEntity],
    // synchronize: true
}