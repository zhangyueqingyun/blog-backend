import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm';

import {ResponseUtil} from '@/utils/response';

import {CategoryController} from './controller';
import {CategoryService} from './service';
import {CategoryEntity} from './entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoryEntity])
    ],
    controllers: [CategoryController],
    providers: [CategoryService, ResponseUtil],
    exports: [CategoryService]
})
export class CategoryModule {}