import {Module} from '@nestjs/common'
import {ResponseUtil} from '@/utils/response';

import {CategoryController} from './controller';

import {BlogModule} from '@/blog/module';
import {CategoryModule} from '@/category/module';

@Module({
    imports: [
        BlogModule,
        CategoryModule
    ],
    controllers: [CategoryController],
    providers: [ResponseUtil]
})
export class CommonModule {}