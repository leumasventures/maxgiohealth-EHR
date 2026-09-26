export function formatCurrency(
  amount: number,
  currency = "USD"
) {
  return new Intl.NumberFormat("USD", {
    style: "currency",
    currency,
  }).format(amount);
}