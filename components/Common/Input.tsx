import React from "react";
import { TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";

interface IProps {
	style: object;
	placeholder: string;
	value: string;
	keyboardType?: KeyboardTypeOptions;
	onChangeText: (value?: any) => void;
}

export default function Input(props: IProps) {
	const stylelessProps = { ...props };
	delete stylelessProps.style;
	return (
		<TextInput
			style={{ ...styles.input, ...props.style }}
			{...stylelessProps}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		paddingLeft: 5,
		height: 30,
		borderBottomColor: "grey",
		borderBottomWidth: 1
	}
});
