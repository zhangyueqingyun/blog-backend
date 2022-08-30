import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { ProfileModule } from '@/profile/module'
import { BlogModule } from '@/blog/module'
import { CommonModule } from '@/category-blog/module'
import { mysqlConf } from './_config/database' 

@Module({
  imports: [
    ProfileModule, 
    BlogModule,
    CommonModule,
    TypeOrmModule.forRoot(mysqlConf)
  ],
})
export class AppModule {}
