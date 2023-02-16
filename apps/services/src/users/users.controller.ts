import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Public } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }
}
