import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

import User from './user.entity';
import { CreateUserDto } from './user.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const hashedPwd = await bcrypt.hash(data.password, SALT_ROUNDS);
    const user = new User();
    user.email = data.email;
    user.password = hashedPwd;
    user.role = data.role;

    return this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findOne(email: string): Promise<User | null> {
    return this.userRepo.findOneBy({ email });
  }
}
