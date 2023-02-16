import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import User from './users/user.entity';
import Company from './companies/company.entity';

dotenv.config({ path: '../config/.env' });

export async function createDataSource(): Promise<DataSource|null> {
  const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;
  const pgPort = parseInt(PGPORT ?? '', 10);
  let result: DataSource | null = null;

  const dataSource = new DataSource({
    type: 'postgres',
    host: PGHOST,
    port: pgPort,
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    entities: [User, Company],
    synchronize: true,
    logging: false
  });

  try {
    await dataSource.initialize();
    result = dataSource;
  } catch (err) {
    console.error(err);
  }

  return result;
}
