import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from '@/user/module';
import { AuthModule } from '@/auth/module';
import { ProfileModule } from '@/profile/module'
import { BlogModule } from '@/blog/module'
import { CommonModule } from '@/category-blog/module'
import { mysqlConf } from './_config/database' 

@Module({
  imports: [
    UserModule,
    AuthModule,
    BlogModule,
    ProfileModule, 
    CommonModule,
    TypeOrmModule.forRoot(mysqlConf)
  ],
})
export class AppModule {}
