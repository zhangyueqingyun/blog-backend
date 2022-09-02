import { Module } from '@nestjs/common';
import { AuthController } from '@/auth/controller';
import { AuthService } from './service';
import { UserModule } from '@/user/module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './config/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './config/constants';
import { JwtStrategy } from './config/jwt.strategy';
import { ResponseUtil } from '@/utils/response';

@Module({
  imports: [
    UserModule, 
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1200s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, ResponseUtil],
  exports: [AuthService],
})
export class AuthModule {}
