import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, GRADIENTS } from "../../../lib/styles";
interface IProps {
	text: string;
	onPress: () => void;
	customStyles?: object;
}
export default function CompanyFieldOption({
	text,
	onPress,
	customStyles
}: IProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={{ ...styles.selectCompany, ...customStyles }}>
				<LinearGradient colors={GRADIENTS.secondary} style={styles.gradient}>
					<Text style={styles.text}>{text}</Text>
				</LinearGradient>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	selectCompany: {
		height: 50,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		elevation: 5,
		marginBottom: 15,
		width: 150,
		borderColor: GRADIENTS.secondary[1],
		borderWidth: 1,
		borderRadius: 5
	},
	gradient: {
		alignItems: "center",
		height: "100%",
		justifyContent: "center"
	},
	text: {
		color: COLORS.white
	}
});
