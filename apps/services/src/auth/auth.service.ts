import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { ValidateUserResult } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<ValidateUserResult | null> {
    const user = await this.usersService.findOne(email);
    if (user) {
      console.log('USER_EXTISTS');
      const passValidResult = await bcrypt.compare(pass, user.password);

      console.log('PASSWORD_MATCHES', passValidResult);

      if (passValidResult) {
        const { password: _, ...result } = user;
        return result;
      }
    }

    return null;
  }

  async login(user: ValidateUserResult) {
    const payload = { email: user.email, sub: user.id };
    console.log('payload', payload, this.jwtService.sign(payload, {expiresIn: '24h'}));
    return {
      access_token: this.jwtService.sign(payload, {expiresIn: '24h'})
    };
  }
}
