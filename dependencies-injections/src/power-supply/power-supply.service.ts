import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {
  supplyPower(watts: number) {
    console.log(`Supplying ${watts} watts of power.`);
  }
}
