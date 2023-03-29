import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';

@Module({
  imports: [PowerSupplyModule], // ? Importing the PowerSupplyModule
  providers: [CpuService],
})
export class CpuModule {}
