const numberFormat = new Intl.NumberFormat("ja-JP");

export function formatPrice(value: number) {
  return numberFormat.format(value);
}

export function formatKm(value: number) {
  return `${numberFormat.format(value)} km`;
}
