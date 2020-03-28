import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TextField({ label, value }) {
  return (
    <View style={styles.textValue}>
      <Text>{label}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textValue: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
