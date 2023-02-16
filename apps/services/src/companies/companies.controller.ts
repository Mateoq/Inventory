import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCompanyDto, UpdateCompanyDto, PaginatedParams } from './company.dto';
import { CompanyService } from './company.service';

import { Public } from '../auth/jwt-auth.guard';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompanyService) {}

  @Public()
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Public()
  @Get()
  findAll(@Query() query: PaginatedParams) {
    if (query.limit && query.start) {
      return this.companiesService.findAllPaginated(query);
    }

    return this.companiesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Public()
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(id, updateCompanyDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(id);
  }
}
