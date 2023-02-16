/* eslint-disable @typescript-eslint/indent */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  address: string;

  @Column({ length: 20 })
  nit: string;

  @Column({ length: 20 })
  phone: string;
}

export default Company;
