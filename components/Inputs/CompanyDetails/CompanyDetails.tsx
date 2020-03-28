import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity
} from "react-native";
import FormInput from "../../FormInput";
import useStore from "../../../hooks/useStore";
import { ADD_COMPANY } from "../../../store";
import TextField from "../../Common/TextField";
import ExistingCompany from "./ExistingCompany";
import CancelButton from "../../Common/CancelButton";
import NewCompany from "./NewCompany";

const defaultCompanyValues = {
  companyName: "",
  companyDNI: "",
  companyAddress: ""
};

export default function CompanyDetails() {
  const { state } = useStore();
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [showSelectCompanyModal, setShowSelectCompanyModal] = useState(false);
  const [company, setCompany] = useState({
    companyName: state.newInvoice.companyName,
    companyDNI: state.newInvoice.companyDNI,
    companyAddress: state.newInvoice.companyAddress
  });

  const formatCompany = (key: string, value: string) => {
    setCompany(currentDetails => ({
      ...currentDetails,
      [key]: value
    }));
  };

  console.log("currentState", state);

  return (
    <View style={styles.companyContainer}>
      <Modal visible={showAddCompanyModal} animationType="slide">
        <NewCompany
          company={company}
          formatCompany={formatCompany}
          closeModal={() => setShowAddCompanyModal(false)}
        />
      </Modal>

      <Modal visible={showSelectCompanyModal} animationType="slide">
        <View style={styles.modalContainer}>
          {state.storedCompanies.map(storedCompany => (
            <ExistingCompany
              company={storedCompany}
              closeModal={() => setShowSelectCompanyModal(false)}
            />
          ))}
          <Button
            title="Add Company"
            onPress={() => {
              setCompany(defaultCompanyValues);
              setShowSelectCompanyModal(false);
              setShowAddCompanyModal(true);
            }}
          />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setShowSelectCompanyModal(true)}>
        <TextField label="Company Name:" value={state.newInvoice.companyName} />
      </TouchableOpacity>
      <TextField label="Company DNI:" value={state.newInvoice.companyDNI} />
      <TextField
        label="Company Address:"
        value={state.newInvoice.companyAddress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  companyContainer: {
    width: "100%",
    marginVertical: 15
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15
  },

  editCompany: {
    width: "30%"
  }
});
