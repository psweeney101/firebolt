import { Module } from '@nestjs/common';
import { PerDiemController } from './per-diem/per-diem.controller';
import { PerDiemService } from './per-diem/per-diem.service';
import { TypeOrmModule } from './typeorm.module';

@Module({
  imports: [TypeOrmModule],
  controllers: [PerDiemController],
  providers: [PerDiemService],
})
export class AppModule {}
