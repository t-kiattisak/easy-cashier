import { Injectable } from '@angular/core';
import { WithdrawalOption } from '../models/withdrawal-option.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllCombinationsUseCase {
  execute(amount: number): WithdrawalOption[][] {
    const coins = [11, 7, 5, 1];
    const result: WithdrawalOption[][] = [];

    const backtrack = (
      remaining: number,
      index: number,
      current: WithdrawalOption[]
    ) => {
      if (remaining === 0) {
        result.push([...current]);
        return;
      }

      for (let i = index; i < coins.length; i++) {
        if (coins[i] <= remaining) {
          current.push({
            coin: coins[i],
            quantity: Math.floor(remaining / coins[i]),
          });
          backtrack(remaining % coins[i], i + 1, current);
          current.pop();
        }
      }
    };

    backtrack(amount, 0, []);
    return result;
  }
}
