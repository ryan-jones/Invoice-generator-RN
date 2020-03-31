import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../lib/styles";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>InvoiceGenerator</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		justifyContent: "center",
		backgroundColor: COLORS.primary,
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.3
	},
	text: {
		color: COLORS.textPrimary,
		fontSize: 21,
		marginHorizontal: 15
	}
});
