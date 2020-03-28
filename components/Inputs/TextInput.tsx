import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { IFormInput } from "../../App.models";

export default function TextFormInput(props: IFormInput) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
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
    width: "100%"
  },
  label: {
    marginBottom: 15
  }
});
