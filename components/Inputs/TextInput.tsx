import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IFormInput } from "../../App.models";
import Input from "../Common/Input";

export default function TextFormInput(props: IFormInput) {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{props.label}</Text>
			<Input
				placeholder={props.placeholder}
				style={styles.input}
				value={props.value}
				keyboardType={props.keyboardType}
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
		width: "100%"
	},
	label: {
		marginBottom: 15
	}
});
