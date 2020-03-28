import React from "react";
import { StyleSheet, View, Text, Picker, Modal } from "react-native";
import DatePicker from "./DatePicker";
import { MONTHS, DAYS, YEARS } from "../../utils/constants";

export default function DateInput(props) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.pickerContainer}>
        <DatePicker
          dateValue={MONTHS}
          value={props.value.month}
          set={props.setMonth}
          label="Month:"
        />
        <DatePicker
          dateValue={DAYS}
          value={props.value.day}
          set={props.setDay}
          label="Day:"
        />
        <DatePicker
          dateValue={YEARS}
          value={props.value.year}
          set={props.setYear}
          label="Year:"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    width: "100%",
    marginVertical: 10
  },
  label: {
    marginBottom: 15
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
