import React, { useState } from "react";
import FormInput from "./FormInput";
import { IFormInput } from "../App.models";
import { View, StyleSheet } from "react-native";

export default function Form() {
  const [companyName, setCompanyName] = useState("");
  const [companyDNI, setCompanyDNI] = useState("");
  const [serviceConducted, setServiceConducted] = useState("");

  const formInputs: IFormInput[] = [
    {
      label: "Company Name:",
      value: companyName,
      onChange: setCompanyName,
      placeholder: "Kodly Consulting"
    },
    {
      label: "Company DNI:",
      value: companyDNI,
      onChange: setCompanyDNI,
      placeholder: "123456789"
    },
    {
      label: "Service Conducted",
      value: serviceConducted,
      onChange: setServiceConducted,
      placeholder: "Mango microfrontend migration"
    }
  ];

  return (
    <View style={styles.form}>
      {formInputs.map((input: IFormInput) => (
        <FormInput key={input.label} {...input} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%"
  }
});
