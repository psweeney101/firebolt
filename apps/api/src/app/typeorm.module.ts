import { Module } from '@nestjs/common';
import { TypeOrmModule as NestJSTypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { entities } from '@firebolt/shared';
import * as migrations from './migrations';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities,
  synchronize: true,
  migrations,
  migrationsRun: true,
});

export default dataSource;

@Module({
  imports: [NestJSTypeOrmModule.forRoot(dataSource.options)],
  exports: [NestJSTypeOrmModule],
})
export class TypeOrmModule {}
