/* eslint-disable @typescript-eslint/indent */
import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  nit: string;

  @IsNotEmpty()
  phone: string;
}

export class UpdateCompanyDto {
  name?: string;
  address?: string;
  nit?: string;
  phone?: string;
}

export class PaginatedParams {
  limit: number;
  start: number;
}
