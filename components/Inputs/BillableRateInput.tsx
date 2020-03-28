import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Picker
} from "react-native";
import { ICurrencyInput, ICurrency } from "../../App.models";
import { CURRENCIES } from "../../utils/constants";

export default function BillableRateInput(props: ICurrencyInput) {
  const [showModal, setShowModal] = useState(false);

  const setCurrency = (selectedCurrency: string) => {
    const currency: ICurrency = CURRENCIES.find(
      ({ name }) => name === selectedCurrency
    );
    props.onCurrencyChange(currency);
  };

  return (
    <View style={styles.inputContainer}>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Picker
            selectedValue={props.currency.name}
            style={{ height: 50, width: 150, marginBottom: 100 }}
            onValueChange={itemValue => setCurrency(itemValue)}
          >
            {CURRENCIES.map(curr => (
              <Picker.Item label={curr.name} value={curr.name} />
            ))}
          </Picker>
          <Button title="Select" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.valueContainer}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{ width: "10%" }}
        >
          <Text style={styles.currency}>{props.currency.name}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          value={props.value}
          onChangeText={props.onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 10
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%"
  },
  currency: {
    width: "100%"
  },
  label: {
    marginBottom: 15
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
