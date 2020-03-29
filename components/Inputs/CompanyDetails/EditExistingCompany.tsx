import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import FormInput from "../../FormInput";
import CancelButton from "../../Common/CancelButton";
import useStore from "../../../hooks/useStore";
import { EDIT_COMPANY, EDIT_AND_SELECT_COMPANY } from "../../../store";

interface IProps {
  company: {
    companyName: string;
    companyDNI: string;
    companyAddress: string;
  };
  editAndSelect: () => void;
  editWithoutSelect: () => void;
}

export default function EditExistingCompany({
  company,
  editAndSelect,
  editWithoutSelect
}: IProps) {
  const { dispatch } = useStore();
  const [editedCompany, setEditedCompany] = useState(company);

  const updateCompany = (key: string, value: string) => {
    setEditedCompany(currentValue => ({
      ...currentValue,
      [key]: value
    }));
  };

  const companyDetails = [
    {
      label: "Company Name",
      placeholder: "Kodly Consulting",
      type: "text",
      value: editedCompany.companyName,
      onChange: value => updateCompany("companyName", value)
    },
    {
      label: "Company DNI",
      placeholder: "123456789",
      type: "text",
      value: editedCompany.companyDNI,
      onChange: value => updateCompany("companyDNI", value)
    },
    {
      label: "Company Address",
      placeholder: "123 5th Ave, New York, NY",
      type: "text",
      value: editedCompany.companyAddress,
      onChange: value => updateCompany("companyAddress", value)
    }
  ];

  return (
    <View style={styles.modalContainer}>
      {companyDetails.map(detail => (
        <FormInput key={detail.label} {...detail} />
      ))}
      <Button
        title="Save Company"
        onPress={() => {
          dispatch({ type: EDIT_COMPANY, payload: editedCompany });
          editWithoutSelect();
        }}
      />
      <Button
        title="Save and Add to Current Invoice"
        onPress={() => {
          dispatch({ type: EDIT_AND_SELECT_COMPANY, payload: company });
          editAndSelect();
        }}
      />
      <CancelButton title="Cancel" onPress={editWithoutSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15
  }
});
