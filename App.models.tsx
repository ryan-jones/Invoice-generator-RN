import { KeyboardTypeOptions } from "react-native";

export interface IFormInput {
	label: string;
	value: string;
	onChange: (text: string) => void;
	placeholder: string;
	type: string;
	scheduling?: string;
	keyboardType?: KeyboardTypeOptions;
}

export interface ICurrencyInput extends IFormInput {
	onCurrencyChange?: (currency: ICurrency) => void;
	currency: ICurrency;
}

export interface ICurrency {
	name: string;
	icon: string;
	format: string;
	marker: string;
}

export interface IDate {
	day: string;
	month: string;
	year: string;
}

export interface ICompany {
	name: string;
	id: string;
	taxId: string;
	address: string;
}

export interface Invoice {
	company?: ICompany;
	serviceConducted: string;
	invoiceNumber: string;
	issueDate: string;
	billableDays: string;
	billableRate: string;
	billingDate: IDate;
	dueDate: IDate;
}
