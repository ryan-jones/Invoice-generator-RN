import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import FormInput from "../../NewInvoice/FormInput";
import CancelButton from "../../Common/CancelButton";
import useStore from "../../../hooks/useStore";
import { EDIT_COMPANY, EDIT_AND_SELECT_COMPANY } from "../../../store";

interface IProps {
	company: {
		id: string;
		name: string;
		taxId: string;
		address: string;
	};
	editAndSelect: () => void;
	editWithoutSelect: () => void;
}

export default function EditExistingCompany({
	company,
	editAndSelect,
	editWithoutSelect
}: IProps) {
	const { state, dispatch } = useStore();
	const [editedCompany, setEditedCompany] = useState(company);

	const updateCompany = (key: string, value: string) => {
		setEditedCompany(currentValue => ({
			...currentValue,
			[key]: value
		}));
	};

	const companyDetails = [
		{
			label: "Company Name",
			placeholder: "Kodly Consulting",
			type: "text",
			value: editedCompany.name,
			onChange: value => updateCompany("name", value)
		},
		{
			label: "Company DNI",
			placeholder: "123456789",
			type: "text",
			value: editedCompany.taxId,
			onChange: value => updateCompany("taxId", value)
		},
		{
			label: "Company Address",
			placeholder: "123 5th Ave, New York, NY",
			type: "text",
			value: editedCompany.address,
			onChange: value => updateCompany("address", value)
		}
	];

	return (
		<View style={styles.modalContainer}>
			{companyDetails.map(detail => (
				<FormInput key={detail.label} {...detail} />
			))}
			<Button
				title="Update Company"
				onPress={() => {
					if (state.newInvoice.company.id === editedCompany.id) {
						dispatch({ type: EDIT_AND_SELECT_COMPANY, payload: editedCompany });
						editAndSelect();
					} else {
						dispatch({ type: EDIT_COMPANY, payload: editedCompany });
						editWithoutSelect();
					}
				}}
			/>
			<Button
				title="Update and Add to Current Invoice"
				onPress={() => {
					dispatch({ type: EDIT_AND_SELECT_COMPANY, payload: editedCompany });
					editAndSelect();
				}}
			/>
			<CancelButton title="Cancel" onPress={editWithoutSelect} />
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
