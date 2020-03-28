import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import { IFormInput, ICurrencyInput, Invoice } from "../App.models";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import useStore from "../hooks/useStore";
import { SET_NEW_INVOICE } from "../store";
import { convertRateForFormatting, formatCurrency } from "../utils";

const defaultValues: Invoice = {
  companyName: "",
  companyDNI: "",
  serviceConducted: "",
  invoiceNumber: "",
  issueDate: "",
  billableDays: "",
  billableRate: ""
};

export default function Form() {
  const { state, dispatch } = useStore();
  const [formValues, setFormValues] = useState(state.newInvoice);
  const [currency, setCurrency] = useState({
    name: "USD",
    icon: "$",
    format: "en-USD",
    marker: ","
  });

  const totalAmountInvoiced = () => {
    const days = Number(formValues.billableDays);
    const rate = Number(
      convertRateForFormatting(formValues.billableRate, currency)
    );
    const amount = days * rate;
    return formatCurrency(amount, currency);
  };

  const updateForm = (key: string, value: string) => {
    setFormValues(currentForm => ({
      ...currentForm,
      [key]: value
    }));
  };

  const formInputs: (IFormInput | ICurrencyInput)[] = [
    {
      label: "Company Name:",
      value: formValues.companyName,
      onChange: name => updateForm("companyName", name),
      placeholder: "Kodly Consulting",
      type: "text"
    },
    {
      label: "Company DNI:",
      value: formValues.companyDNI,
      onChange: DNI => updateForm("companyDNI", DNI),
      placeholder: "123456789",
      type: "text"
    },
    {
      label: "Invoice Number:",
      value: formValues.invoiceNumber,
      onChange: invoice => updateForm("invoiceNumber", invoice),
      placeholder: "0001",
      type: "text"
    },
    {
      label: "Date Issued:",
      value: formValues.issueDate,
      onChange: date => updateForm("issueDate", date),
      placeholder: "01/01/2020",
      type: "date"
    },
    {
      label: "Billable Days:",
      value: formValues.billableDays,
      onChange: days => updateForm("billableDays", days),
      placeholder: "22",
      type: "text"
    },
    {
      label: "Billable Rate:",
      value: formValues.billableRate,
      currency: currency,
      onChange: rate => updateForm("billableRate", rate),
      onCurrencyChange: currency => setCurrency(currency),
      placeholder: "0001",
      type: "currency"
    },
    {
      label: "Service Conducted: ",
      value: formValues.serviceConducted,
      onChange: service => updateForm("serviceConducted", service),
      placeholder: "Mango microfrontend migration",
      type: "text"
    }
  ];

  const resetAll = () => setFormValues(defaultValues);

  return (
    <View style={styles.form}>
      {formInputs.map((input: IFormInput) => (
        <FormInput key={input.label} {...input} />
      ))}
      <Text style={styles.total}>
        Invoiced Amount:
        {totalAmountInvoiced()}
      </Text>
      <TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <Button
            title="Add Invoice"
            onPress={() =>
              dispatch({ type: SET_NEW_INVOICE, payload: formValues })
            }
          />
          <Button title="Reset" color="red" onPress={resetAll} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%"
  },
  total: {
    marginVertical: 30
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
