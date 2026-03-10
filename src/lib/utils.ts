export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(price: number, currency: string = 'AZN'): string {
  return `${price.toFixed(2)} ${currency}`;
}
