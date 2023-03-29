import { Module } from '@nestjs/common';
import { PowerSupplyService } from './power-supply.service';

@Module({
  providers: [PowerSupplyService], // ? By default, the service is only available in the module where it is defined. Because it have private access modifier.
  exports: [PowerSupplyService], // ? Export the service to be used in other modules. It's important when we want to use the service in other modules.
})
export class PowerSupplyModule {}
