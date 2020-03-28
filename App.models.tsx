export interface IFormInput {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  type: string;
  scheduling?: string;
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

interface IDate {
  day: string;
  month: string;
  year: string;
}

export interface Invoice {
  companyName: string;
  companyDNI: string;
  serviceConducted: string;
  invoiceNumber: string;
  issueDate: string;
  billableDays: string;
  billableRate: string;
  billingDate: IDate;
  dueDate: IDate;
}
