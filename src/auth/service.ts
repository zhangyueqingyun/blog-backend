import { Injectable } from '@nestjs/common';
import { UserService } from '@/user/service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private readonly userService: UserService, 
      private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.userService.getUserByUsername(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { username: user.username, id: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
