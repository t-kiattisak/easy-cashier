import { Injectable } from '@angular/core';
import { GetAllCombinationsUseCase } from './get-all-combinations.use-case';
import { WithdrawalOption } from '../models/withdrawal-option.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateChangeUseCase {
  constructor(private getAllCombinationsUseCase: GetAllCombinationsUseCase) {}

  execute(
    receivedMoney: number,
    totalPrice: number
  ): {
    change: number | null;
    withdrawalOptions: WithdrawalOption[][];
  } {
    if (receivedMoney >= totalPrice && totalPrice !== 0) {
      const change = receivedMoney - totalPrice;
      const withdrawalOptions = this.getAllCombinationsUseCase.execute(change);

      return {
        change,
        withdrawalOptions,
      };
    } else {
      return {
        change: null,
        withdrawalOptions: [],
      };
    }
  }
}
