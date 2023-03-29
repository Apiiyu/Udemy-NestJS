import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerSupplyService: PowerSupplyService) {}

  getDiskData() {
    console.log('Drawing 20 watts from power supply');
    this.powerSupplyService.supplyPower(20);
    return 'Disk data';
  }
}
