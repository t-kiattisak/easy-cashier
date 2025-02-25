import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '../utils/currency.util';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(
    value: number,
    currencySymbol: string = '฿',
    locale: string = 'th-TH'
  ): string {
    return formatCurrency(value, currencySymbol, locale);
  }
}
