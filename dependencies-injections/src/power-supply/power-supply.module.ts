import { Module } from '@nestjs/common';
import { PowerSupplyService } from './power-supply.service';

@Module({
  providers: [PowerSupplyService]
})
export class PowerSupplyModule {}
