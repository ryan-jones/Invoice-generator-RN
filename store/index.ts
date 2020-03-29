export const SET_NEW_INVOICE = "SET_NEW_INVOICE";
export const ADD_COMPANY = "ADD_COMPANY";
export const ADD_AND_SELECT_COMPANY = "ADD_AND_SELECT_COMPANY";
export const SELECT_COMPANY = "SELECT_COMPANY";
export const EDIT_COMPANY = "EDIT_COMPANY";
export const EDIT_AND_SELECT_COMPANY = "EDIT_AND_SELECT_COMPANY";

const createInvoiceNumber = (numberOfInvoices: number): string => {
  if (numberOfInvoices === 0) return `00001`;
  if (numberOfInvoices < 10) return `0000${numberOfInvoices}`;
  if (numberOfInvoices < 100) return `000${numberOfInvoices}`;
  if (numberOfInvoices < 1000) return `00${numberOfInvoices}`;
  if (numberOfInvoices < 10000) return `0${numberOfInvoices}`;
  return numberOfInvoices.toString();
};

export const DEFAULT_REDUCER = (store, action) => {
  switch (action.type) {
    case SET_NEW_INVOICE:
      return { ...store, newInvoice: action.payload };
    case ADD_COMPANY:
      return {
        ...store,
        storedCompanies: [...store.storedCompanies, action.payload]
      };
    case SELECT_COMPANY:
      const companyInvoices = store.storedInvoices.filter(
        ({ companyDNI }) => companyDNI === action.payload.companyDNI
      );
      return {
        ...store,
        newInvoice: {
          ...store.newInvoice,
          invoiceNumber: createInvoiceNumber(companyInvoices.length),
          companyName: action.payload.companyName,
          companyDNI: action.payload.companyDNI
        }
      };
    case ADD_AND_SELECT_COMPANY:
      return {
        ...store,
        storedCompanies: [...store.storedCompanies, action.payload],
        newInvoice: {
          ...store.newInvoice,
          companyName: action.payload.companyName,
          companyDNI: action.payload.companyDNI,
          companyAddress: action.payload.companyAddress
        }
      };
    case EDIT_COMPANY:
      const companies = [...store.storedCompanies];
      const companyIndex = companies.findIndex(
        company => company.companyDNI === action.payload.companyDNI
      );
      companies[companyIndex] = action.payload;
      return {
        ...store,
        storedCompanies: companies
      };
    case EDIT_AND_SELECT_COMPANY:
      const newCompanies = [...store.storedCompanies];
      const index = newCompanies.findIndex(
        company => company.companyDNI === action.payload.companyDNI
      );
      companies[index] = action.payload;
      return {
        ...store,
        storedCompanies: companies,
        newInvoice: {
          ...store.newInvoice,
          companyName: action.payload.companyName,
          companyDNI: action.payload.companyDNI,
          companyAddress: action.payload.companyAddress
        }
      };
    default:
      return store;
  }
};
