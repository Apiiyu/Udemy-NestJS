import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class CpuService {
  constructor(private readonly powerSupplyService: PowerSupplyService) {}

  compute(firstNumber: number, secondNumber: number) {
    this.powerSupplyService.supplyPower(10);
    return firstNumber + secondNumber;
  }
}
