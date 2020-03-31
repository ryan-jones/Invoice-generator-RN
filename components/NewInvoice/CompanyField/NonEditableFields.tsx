import React from "react";
import TextField from "../../Common/TextField";
import useStore from "../../../hooks/useStore";
import { View } from "react-native";

export default function NonEditableFields() {
	const { state } = useStore();

	return (
		<View>
			<TextField label="Company Name:" value={state.newInvoice.company.name} />
			<TextField label="Company DNI:" value={state.newInvoice.company.taxId} />
			<TextField
				label="Company Address:"
				value={state.newInvoice.company.address}
			/>
			<TextField
				label="Invoice Number"
				value={state.newInvoice.invoiceNumber}
			/>
		</View>
	);
}
