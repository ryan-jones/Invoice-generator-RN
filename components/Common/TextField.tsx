import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  label: string;
  value: string;
  isCompanyName?: boolean;
}

export default function TextField({ label, value, isCompanyName }: IProps) {
  const setStyle = (value: string) =>
    isCompanyName ? styles[`${value}Name`] : styles[value];
  return (
    <View style={setStyle("view")}>
      <Text style={setStyle("label")}>{label}</Text>
      <Text style={setStyle("name")}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10
  },
  label: {
    color: "grey",
    marginBottom: 10
  },
  text: {
    marginTop: 15,
    color: "grey"
  },
  viewName: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10
  },
  labelName: {
    color: "black",
    marginBottom: 10
  },
  textName: {
    marginTop: 15,
    color: "black"
  }
});
