import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PerDiem } from '@firebolt/shared';

@Injectable()
export class PerDiemService {
  readonly repository = this.dataSource.getRepository(PerDiem);

  constructor(private readonly dataSource: DataSource) {}

  list(): Promise<PerDiem[]> {
    return this.repository.find();
  }
}
