export interface IFormInput {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  type: string;
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

export interface Invoice {
  companyName: string;
  companyDNI: string;
  serviceConducted: string;
  invoiceNumber: string;
  issueDate: string;
  billableDays: string;
  billableRate: string;
}
