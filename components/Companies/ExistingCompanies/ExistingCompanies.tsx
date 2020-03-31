import React from "react";
import ExistingCompany from "./ExistingCompany";
import { Text, View, Button, StyleSheet } from "react-native";
import CancelButton from "../../Common/CancelButton";

export default function ExistingCompanies(props) {
	return (
		<View style={styles.componentContainer}>
			{props.storedCompanies.length >= 1 ? (
				props.storedCompanies.map(storedCompany => (
					<ExistingCompany
						company={storedCompany}
						editCompany={props.editCompany}
						closeModal={props.closeModal}
					/>
				))
			) : (
				<Text style={styles.text}>
					There are no saved companies. Click Below to add a company!
				</Text>
			)}
			<View style={styles.buttons}>
				<Button title="Add Company" onPress={props.onPress} />
				<CancelButton title="Cancel" onPress={props.closeModal} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	componentContainer: {
		justifyContent: "space-evenly",
		flex: 1
	},
	text: {
		textAlign: "center"
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
});
