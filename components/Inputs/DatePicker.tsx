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

interface IProps {
  dateValue: string[];
  value: string;
  set: (value: string) => void;
}

export default function DatePicker(props: IProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.modalContainer}>
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
        style={{ width: "100%" }}
      >
        <Text>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  text: {
    width: "100%"
  },
  label: {
    marginBottom: 15
  }
});
