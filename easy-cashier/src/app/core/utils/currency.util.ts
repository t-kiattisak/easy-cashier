export function formatCurrency(
  amount: number,
  currencySymbol: string = '฿',
  locale: string = 'th-TH'
): string {
  if (isNaN(amount)) return '0 ' + currencySymbol;

  return (
    amount.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + ` ${currencySymbol}`
  );
}
