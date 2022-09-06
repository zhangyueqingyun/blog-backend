import { Module } from '@nestjs/common';
import { UserController } from '@/user/controller'
import { UserService } from '@/user/service'
import { UserEntity  } from '@/user/entity';
import { ResponseUtil } from '@/utils/response'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, ResponseUtil],
  exports: [UserService]
})
export class UserModule {}
