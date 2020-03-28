import { ICurrency } from "../App.models";

export const CURRENCIES: ICurrency[] = [
  { name: "USD", icon: "$", format: "en-USD", marker: "," },
  { name: "EUR", icon: "€", format: "de-DE", marker: "." },
  { name: "GBP", icon: "£", format: "en-GB", marker: "," },
  { name: "INR", icon: "₹", format: "en-IN", marker: "," },
  { name: "JPY", icon: "￥", format: "ja-JP", marker: "," },
  { name: "TWD", icon: "$", format: "zh-TW", marker: "," },
  { name: "CNY", icon: "￥", format: "zh-CN", marker: "," }
];
