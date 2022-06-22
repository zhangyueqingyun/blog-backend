import { Module } from '@nestjs/common';
import {ProfileModule} from '@/profile/module'
import {BlogModule} from '@/blog/module'
@Module({
  imports: [ProfileModule, BlogModule],
})
export class AppModule {}
