export const SET_NEW_INVOICE = "SET_NEW_INVOICE";
export const ADD_COMPANY = "ADD_COMPANY";
export const ADD_AND_SELECT_COMPANY = "ADD_AND_SELECT_COMPANY";
export const SELECT_COMPANY = "SELECT_COMPANY";

export const DEFAULT_REDUCER = (store, action) => {
  switch (action.type) {
    case SET_NEW_INVOICE:
      return { ...store, newInvoice: action.payload };
    case ADD_COMPANY:
      return {
        ...store,
        storedCompanies: [...store.storedCompanies, action.payload]
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
    case SELECT_COMPANY:
      return {
        ...store,
        newInvoice: {
          ...store.newInvoice,
          companyName: action.payload.companyName,
          companyDNI: action.payload.companyDNI
        }
      };
    default:
      return store;
  }
};
