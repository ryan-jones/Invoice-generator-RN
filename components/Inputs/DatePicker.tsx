import React, { useState } from "react";
import {
  Button,
  Picker,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from "react-native";

export default function DatePicker(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Modal visible={showModal} animationType="slide">
        <Picker
          selectedValue={props.value}
          onValueChange={itemValue => props.set(itemValue)}
        >
          {props.dateValue.map(val => (
            <Picker.Item key={val} label={val} value={val} />
          ))}
        </Picker>
        <Button title="Select" onPress={() => setShowModal(false)} />
      </Modal>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{ width: "30%" }}
      >
        <Text style={styles.text}>Month:</Text>
        <Text>{props.value.month}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    width: "100%",
    marginVertical: 10
  },
  text: {
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
