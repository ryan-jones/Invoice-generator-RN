import React, { useState } from "react";
import FormInput from "./FormInput";
import { IFormInput } from "../App.models";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

const defaultValues = {
  companyName: "",
  companyDNI: "",
  serviceConducted: "",
  invoiceNumber: "",
  issueDate: "",
  billableDays: "",
  billableRate: ""
};

export default function Form() {
  const [formValues, setFormValues] = useState(defaultValues);

  const totalAmountInvoiced =
    Number(formValues.billableDays) * Number(formValues.billableRate);

  const updateForm = (key, value) => {
    setFormValues(currentForm => ({
      ...currentForm,
      [key]: value
    }));
  };

  const formInputs: IFormInput[] = [
    {
      label: "Company Name:",
      value: formValues.companyName,
      onChange: name => updateForm("companyName", name),
      placeholder: "Kodly Consulting"
    },
    {
      label: "Company DNI:",
      value: formValues.companyDNI,
      onChange: DNI => updateForm("companyDNI", DNI),
      placeholder: "123456789"
    },
    {
      label: "Invoice Number:",
      value: formValues.invoiceNumber,
      onChange: invoice => updateForm("invoiceNumber", invoice),
      placeholder: "0001"
    },
    {
      label: "Date Issued:",
      value: formValues.issueDate,
      onChange: date => updateForm("issueDate", date),
      placeholder: "01/01/2020"
    },
    {
      label: "Billable Days:",
      value: formValues.billableDays,
      onChange: days => updateForm("billableDays", days),
      placeholder: "22"
    },
    {
      label: "Billable Rate:",
      value: formValues.billableRate,
      onChange: rate => updateForm("billableRate", rate),
      placeholder: "0001"
    },
    {
      label: "Service Conducted: ",
      value: formValues.serviceConducted,
      onChange: service => updateForm("serviceConducted", service),
      placeholder: "Mango microfrontend migration"
    }
  ];

  const resetAll = () => setFormValues(defaultValues);

  return (
    <View style={styles.form}>
      {formInputs.map((input: IFormInput) => (
        <FormInput key={input.label} {...input} />
      ))}
      <Text style={styles.total}>Invoiced Amount: {totalAmountInvoiced}</Text>
      <TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <Button title="Add Invoice" onPress={() => console.log("pressed")} />
          <Button title="Reset" onPress={resetAll} />
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
