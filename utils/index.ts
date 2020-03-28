import { ICurrency } from "../App.models";

export const formatCurrency = (value: number, currency: ICurrency): string => {
  const formatter = new Intl.NumberFormat(currency.format, {
    style: "currency",
    currency: currency.name
  });
  return formatter.format(value);
};

export const convertCurrencyToNumber = (
  rate: string,
  currency: ICurrency
): number => {
  const convertedRate = rate.split(currency.marker).join("");
  return Number(
    currency.name === "EUR" ? convertedRate.replace(",", ".") : convertedRate
  );
};
