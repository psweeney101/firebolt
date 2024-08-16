import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '../typeorm.module';
import { PerDiemController } from './per-diem.controller';
import { PerDiemService } from './per-diem.service';

describe('PerDiemController', () => {
  let controller: PerDiemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerDiemController],
      providers: [PerDiemService],
      imports: [TypeOrmModule],
    }).compile();

    controller = module.get<PerDiemController>(PerDiemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
