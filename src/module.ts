import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { ProfileModule } from '@/profile/module'
import { BlogModule } from '@/blog/module'
import { mysqlConf } from './config/database' 

@Module({
  imports: [
    ProfileModule, 
    BlogModule,
    TypeOrmModule.forRoot(mysqlConf)
  ],
})
export class AppModule {}
