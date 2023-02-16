import Express from 'express';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

import { ValidateUserResult } from './types';
import { Public } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: Express.Request) {
    console.log(req.user);
    return this.authService.login(req.user as ValidateUserResult);
  }
}
