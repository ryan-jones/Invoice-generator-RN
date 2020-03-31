import React, { useReducer } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import BaseLayout from "./components/BaseLayout";
import Form from "./components/NewInvoice/NewInvoice";
import { DEFAULT_REDUCER } from "./store";
import StoreContext from "./contexts/store";
import "intl";
import "intl/locale-data/jsonp/en";

const INITIAL_STATE = {
	newInvoice: {
		company: {
			id: "",
			name: "",
			taxId: "",
			address: ""
		},
		serviceConducted: "",
		invoiceNumber: "",
		issueDate: "",
		billableDays: "",
		billableRate: "",
		billingDate: {
			day: "",
			month: "",
			year: ""
		},
		dueDate: {
			day: "",
			month: "",
			year: ""
		}
	},
	selectedInvoice: null,
	storedCompanies: [],
	storedInvoices: []
};
export default function App() {
	const [state, dispatch] = useReducer(DEFAULT_REDUCER, INITIAL_STATE);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<View style={styles.viewport}>
				<BaseLayout>
					<ScrollView>
						<Form />
					</ScrollView>
				</BaseLayout>
			</View>
		</StoreContext.Provider>
	);
}

const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		width: "100%"
	}
});
