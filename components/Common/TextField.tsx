import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
	label: string;
	value: string;
}

export default function TextField({ label, value }: IProps) {
	return (
		<View style={styles.view}>
			<Text style={styles.label}>
				{label} {value}{" "}
			</Text>
			{/* <Text style={styles.text}>{value}</Text> */}
		</View>
	);
}
const styles = StyleSheet.create({
	view: {
		// borderBottomColor: "grey",
		// borderBottomWidth: 1,
		marginVertical: 10
	},
	label: {
		color: "grey",
		marginBottom: 10
	},
	text: {
		marginTop: 15,
		color: "grey"
	}
});
