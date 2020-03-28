import { ICurrency } from "../App.models";

export const CURRENCIES: ICurrency[] = [
  { name: "USD", icon: "$", format: "en-USD", marker: "," },
  { name: "EUR", icon: "€", format: "de-DE", marker: "." },
  { name: "GBP", icon: "£", format: "en-UK", marker: "," }
];
