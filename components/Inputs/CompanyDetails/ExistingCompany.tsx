import React from "react";
import { View, TouchableOpacity, Text, Button, StyleSheet } from "react-native";
import useStore from "../../../hooks/useStore";
import { SELECT_COMPANY } from "../../../store";

interface IProps {
  company: {
    companyName: string;
    companyDNI: string;
    companyAddress: string;
  };
  closeModal: () => void;
  editCompany: () => void;
}

export default function ExistingCompany({ company, closeModal, editCompany }) {
  const { dispatch } = useStore();

  return (
    <View style={styles.existingCompanyContainer}>
      <TouchableOpacity
        style={styles.selectCompany}
        key={company.companyDNI}
        onPress={() => {
          dispatch({ type: SELECT_COMPANY, payload: company });
          closeModal();
        }}
      >
        <View style={styles.selectCompanyView}>
          <Text style={styles.selectCompanyText}>{company.companyName}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.editCompany}>
        <Button title="Edit Company" onPress={editCompany} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  existingCompanyContainer: {
    width: "100%",
    flexDirection: "row"
  },
  selectCompany: {
    borderTopColor: "black",
    borderBottomColor: "black",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1,
    width: "70%",
    justifyContent: "center"
  },
  selectCompanyView: {
    width: "100%",
    textAlign: "center"
  },
  selectCompanyText: {
    textAlign: "center",
    fontSize: 18
  },
  editCompany: {
    width: "30%"
  }
});
