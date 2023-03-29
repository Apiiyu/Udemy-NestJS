import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
@Module({
  imports: [PowerSupplyModule],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
