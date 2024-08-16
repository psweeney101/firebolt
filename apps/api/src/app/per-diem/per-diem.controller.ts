import { Controller, Get } from '@nestjs/common';
import { PerDiem } from '@firebolt/shared';
import { PerDiemService } from './per-diem.service';

@Controller('per-diem')
export class PerDiemController {
  constructor(private readonly perDiemService: PerDiemService) {}

  @Get()
  list(): Promise<PerDiem[]> {
    return this.perDiemService.list();
  }
}
