import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import { IFormInput, ICurrencyInput, Invoice } from "../App.models";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import useStore from "../hooks/useStore";
import { SET_NEW_INVOICE } from "../store";
import { convertCurrencyToNumber, formatCurrency } from "../utils";
import { FORM_FIELDS } from "../utils/constants";
import camelCase from "lodash/camelCase";
import CompanyDetails from "./Inputs/CompanyDetails/CompanyDetails";

const defaultValues: Invoice = {
  companyName: "",
  companyDNI: "",
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

  const updateForm = (key: string, value: string) => {
    setFormValues(currentForm => ({
      ...currentForm,
      [key]: value
    }));
  };

  const updateFormDate = (dateType: string, key: string, value: string) => {
    let newValues = { ...formValues[dateType], [key]: value };
    setFormValues(currentForm => ({
      ...currentForm,
      [dateType]: {
        ...newValues
      }
    }));
  };

  const formInputs: (IFormInput | ICurrencyInput)[] = FORM_FIELDS.map(field => {
    const key = camelCase(field.label);
    const defaultValues = {
      ...field,
      value: formValues[key],
      onChange: value => updateForm(key, value)
    };

    switch (field.type) {
      case "currency":
        return {
          ...defaultValues,
          currency,
          onCurrencyChange: curr => {
            setCurrency(curr);
            updateForm(key, "");
          }
        };
      case "date":
        return {
          ...field,
          value: formValues[key],
          setDay: day => updateFormDate(field.dateType, "day", day),
          setMonth: month => updateFormDate(field.dateType, "month", month),
          setYear: year => updateFormDate(field.dateType, "year", year)
        };
      default:
        return defaultValues;
    }
  });

  const totalAmountInvoiced = (): string => {
    const days = Number(formValues.billableDays);
    const rate = convertCurrencyToNumber(formValues.billableRate, currency);
    const amount = days * rate;
    return formatCurrency(amount, currency);
  };

  const resetAll = (): void => setFormValues(defaultValues);

  return (
    <View style={styles.form}>
      <CompanyDetails />
      {formInputs.map((input: IFormInput) => (
        <FormInput key={input.label} {...input} />
      ))}
      <Text style={styles.total}>Invoiced Amount: {totalAmountInvoiced()}</Text>
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
