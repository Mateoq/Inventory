/* eslint-disable @typescript-eslint/indent */
import {
  IsNotEmpty,
  IsEmail,
  IsNumber
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  role: number;
}
