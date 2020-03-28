export const SET_NEW_INVOICE = "SET_NEW_INVOICE";

export const DEFAULT_REDUCER = (store, action) => {
  switch (action.type) {
    case SET_NEW_INVOICE:
      return { ...store, newInvoice: action.payload };
    default:
      return store;
  }
};
