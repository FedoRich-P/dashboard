 type FormatNumberOptions = {
  compact?: boolean;
  decimals?: number;
  locale?: string;
}

export const formatNumber = (value: number, options: FormatNumberOptions = {}): string => {
  const { compact = true, decimals = 1, locale = 'ru-RU' } = options;

  if (compact) {
    // units: ['', 'тыс.', 'млн', 'млрд']
    const units = ['', 'K', 'M', 'B', 'T'];
    const unitIndex = Math.min(
      Math.floor(Math.log10(Math.abs(value)) / 3),
      units.length - 1
    );
    const scaledValue = value / Math.pow(10, unitIndex * 3);

    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: scaledValue % 1 !== 0 ? decimals : 0
    }).format(scaledValue) + units[unitIndex];
  }

  return new Intl.NumberFormat(locale).format(value);
};