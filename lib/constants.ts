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

export const DEFAULT_CURRENCY = {
	name: "USD",
	icon: "$",
	format: "en-USD",
	marker: ","
};

export const FORM_FIELDS: any[] = [
	{
		label: "Service Conducted",
		placeholder: "Mango microfrontend migration",
		type: "text"
	},
	// {
	//   label: "Billing per",
	//   type: "select",
	//   options: ["hour", "day", "unit", "project", "phase"]
	// },
	{
		label: "Billable Quantity",
		placeholder: "22",
		type: "text",
		keyboardType: "number-pad"
	},
	{
		label: "Billable Rate",
		placeholder: "100.00",
		type: "currency",
		keyboardType: "numeric"
	},
	{
		label: "Billing Date",
		type: "date",
		dateType: "billingDate"
	},
	{
		label: "Due Date",
		type: "date",
		dateType: "dueDate"
	}
];

export const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export const DAYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const YEARS = ["2020", "2021"];
