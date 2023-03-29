import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
@Module({
  imports: [PowerSupplyModule],
  providers: [DiskService],
})
export class DiskModule {}
