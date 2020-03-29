import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity
} from "react-native";
import useStore from "../../../hooks/useStore";
import TextField from "../../Common/TextField";
import ExistingCompany from "./ExistingCompany";
import NewCompany from "./NewCompany";
import EditExistingCompany from "./EditExistingCompany";
import CancelButton from "../../Common/CancelButton";

const defaultCompanyValues = {
  companyName: "",
  companyDNI: "",
  companyAddress: ""
};

export default function CompanyDetails() {
  const { state } = useStore();
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [showSelectCompanyModal, setShowSelectCompanyModal] = useState(false);
  const [showEditSelectCompanyModal, setShowEditSelectCompanyModal] = useState(
    false
  );
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
              editCompany={() => {
                setCompany(storedCompany);
                setShowSelectCompanyModal(false);
                setShowEditSelectCompanyModal(true);
              }}
              closeModal={() => setShowSelectCompanyModal(false)}
            />
          ))}
          <View>
            <Button
              title="Add Company"
              onPress={() => {
                setCompany(defaultCompanyValues);
                setShowSelectCompanyModal(false);
                setShowAddCompanyModal(true);
              }}
            />
            <CancelButton
              title="Cancel"
              onPress={() => setShowSelectCompanyModal(false)}
            />
          </View>
        </View>
      </Modal>

      <Modal visible={showEditSelectCompanyModal} animationType="slide">
        <EditExistingCompany
          company={company}
          editAndSelect={() => {
            setShowEditSelectCompanyModal(false);
          }}
          editWithoutSelect={() => {
            setShowEditSelectCompanyModal(false);
            setShowSelectCompanyModal(false);
          }}
        />
      </Modal>

      <TouchableOpacity onPress={() => setShowSelectCompanyModal(true)}>
        <TextField
          isCompanyName
          label="Company Name:"
          value={state.newInvoice.companyName}
        />
      </TouchableOpacity>
      <TextField label="Company DNI:" value={state.newInvoice.companyDNI} />
      <TextField
        label="Company Address:"
        value={state.newInvoice.companyAddress}
      />
      <TextField
        label="Invoice Number"
        value={state.newInvoice.invoiceNumber}
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
