import React, { useReducer } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Form from "./components/Form";
import { DEFAULT_REDUCER } from "./store";
import StoreContext from "./contexts/store";
import "intl";
import "intl/locale-data/jsonp/en";

const INITIAL_STATE = {
  newInvoice: {
    companyName: "",
    companyDNI: "",
    companyAddress: "",
    serviceConducted: "",
    invoiceNumber: "",
    issueDate: "",
    billableDays: "",
    billableRate: "",
    billingDate: {
      day: "",
      month: "",
      year: ""
    },
    dueDate: {
      day: "",
      month: "",
      year: ""
    }
  },
  selectedInvoice: null,
  storedCompanies: [],
  storedInvoices: []
};

export default function App() {
  const [state, dispatch] = useReducer(DEFAULT_REDUCER, INITIAL_STATE);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <ScrollView>
        <View style={styles.viewport}>
          <Form />
        </View>
      </ScrollView>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  viewport: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 15
  }
});
