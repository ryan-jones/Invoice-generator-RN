import React from "react";
import { View, Button, StyleSheet } from "react-native";
import FormInput from "../NewInvoice/FormInput";
import CancelButton from "../Common/CancelButton";
import useStore from "../../hooks/useStore";
import { ADD_COMPANY, ADD_AND_SELECT_COMPANY } from "../../store";

export default function NewCompany({ closeModal, formatCompany, company }) {
	const { dispatch } = useStore();

	const companyDetails = [
		{
			label: "Company Name",
			placeholder: "Kodly Consulting",
			type: "text",
			value: company.name,
			onChange: value => formatCompany("name", value)
		},
		{
			label: "Company DNI",
			placeholder: "123456789",
			type: "text",
			value: company.taxId,
			onChange: value => formatCompany("taxId", value)
		},
		{
			label: "Company Address",
			placeholder: "123 5th Ave, New York, NY",
			type: "text",
			value: company.address,
			onChange: value => formatCompany("address", value)
		}
	];

	return (
		<View style={styles.modalContainer}>
			{companyDetails.map(detail => (
				<FormInput key={detail.label} {...detail} />
			))}
			<Button
				title="Save Company"
				onPress={() => {
					dispatch({ type: ADD_COMPANY, payload: company });
					closeModal();
				}}
			/>
			<Button
				title="Save and Add to Current Invoice"
				onPress={() => {
					dispatch({ type: ADD_AND_SELECT_COMPANY, payload: company });
					closeModal();
				}}
			/>
			<CancelButton title="Cancel" onPress={closeModal} />
		</View>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 15
	}
});
