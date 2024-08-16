import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '../typeorm.module';
import { PerDiemService } from './per-diem.service';

describe('PerDiemService', () => {
  let service: PerDiemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerDiemService],
      imports: [TypeOrmModule],
    }).compile();

    service = module.get<PerDiemService>(PerDiemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
