import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateCompanyDto,
  PaginatedParams,
  UpdateCompanyDto
} from './company.dto';
import Company from './company.entity';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRepo: Repository<Company>
  ) {}

  findAll(): Promise<Company[]> {
    return this.companyRepo.find();
  }

  findOne(id: string): Promise<Company | null> {
    return this.companyRepo.findOneBy({ id });
  }

  findAllPaginated(params: PaginatedParams): Promise<Company[]> {
    return this.companyRepo.find({
      order: {
        name: 'ASC'
      },
      skip: params.start,
      take: params.limit
    });
  }

  create(companyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    company.name = companyDto.name;
    company.address = companyDto.address;
    company.nit = companyDto.nit;
    company.phone = companyDto.phone;
    return this.companyRepo.save(company);
  }

  async update(id: string, companyDto: UpdateCompanyDto): Promise<Company | null> {
    const company = await this.companyRepo.findOneBy({ id });

    if (company) {
      company.name = companyDto.name ?? company.name;
      company.address = companyDto.address ?? company.address;
      company.nit = companyDto.nit ?? company.nit;
      company.phone = companyDto.phone ?? company.phone;
      return this.companyRepo.save(company);
    }

    return null;
  }

  async remove(id: string): Promise<void> {
    await this.companyRepo.delete(id);
  }
}
