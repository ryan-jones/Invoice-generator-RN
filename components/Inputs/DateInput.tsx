import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DatePicker from "./DatePicker";
import { MONTHS, DAYS, YEARS } from "../../utils/constants";

interface IDateProps {
  value: {
    day: string;
    month: string;
    year: string;
  };
  dateType: string;
  label: string;
  onChange: () => void;
  setDay: () => void;
  setMonth: () => void;
  setYear: () => void;
  type: string;
}

export default function DateInput(props: IDateProps) {
  const day = props.value.day || new Date().getDate();
  const month = props.value.month || MONTHS[new Date().getMonth()];
  const year = props.value.year || new Date().getFullYear();

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.pickerContainer}>
        <DatePicker
          dateValue={MONTHS}
          value={month.toString()}
          set={props.setMonth}
        />
        <DatePicker
          dateValue={DAYS}
          value={day.toString()}
          set={props.setDay}
        />
        <DatePicker
          dateValue={YEARS}
          value={year.toString()}
          set={props.setYear}
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
