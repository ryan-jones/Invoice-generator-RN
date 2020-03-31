import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import useStore from "../../../hooks/useStore";
import NewCompany from "../../Companies/NewCompany";
import EditExistingCompany from "../../Companies/ExistingCompanies/EditExistingCompany";
import CompanyFieldOption from "./CompanyFieldOption";
import ExistingCompanies from "../../Companies/ExistingCompanies/ExistingCompanies";
import { ICompany } from "../../../App.models";
import NonEditableFields from "./NonEditableFields";
const defaultCompanyValues: ICompany = {
	id: "",
	name: "",
	taxId: "",
	address: ""
};

export default function CompanyDetails() {
	const { state } = useStore();
	const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
	const [showSelectCompanyModal, setShowSelectCompanyModal] = useState(false);
	const [showEditSelectCompanyModal, setShowEditSelectCompanyModal] = useState(
		false
	);
	const [company, setCompany] = useState({
		id: state.newInvoice.company.id,
		name: state.newInvoice.company.name,
		taxId: state.newInvoice.company.taxId,
		address: state.newInvoice.company.address
	});

	const formatCompany = (key: string, value: string) => {
		setCompany(currentDetails => ({
			...currentDetails,
			[key]: value
		}));
	};

	const setAndClose = (company: ICompany) => {
		setCompany(company);
		setShowSelectCompanyModal(false);
	};

	return (
		<View style={styles.companyContainer}>
			<Modal visible={showAddCompanyModal} animationType="slide">
				<NewCompany
					company={company}
					formatCompany={formatCompany}
					closeModal={() => setShowAddCompanyModal(false)}
				/>
			</Modal>

			<Modal visible={showSelectCompanyModal} animationType="slide">
				<View style={styles.modalContainer}>
					<ExistingCompanies
						storedCompanies={state.storedCompanies}
						editCompany={company => {
							setAndClose(company);
							setShowEditSelectCompanyModal(true);
						}}
						onPress={() => {
							setAndClose(defaultCompanyValues);
							setShowAddCompanyModal(true);
						}}
						closeModal={() => setShowSelectCompanyModal(false)}
					/>
				</View>
			</Modal>

			<Modal visible={showEditSelectCompanyModal} animationType="slide">
				<EditExistingCompany
					company={company}
					editAndSelect={() => {
						setShowEditSelectCompanyModal(false);
					}}
					editWithoutSelect={() => {
						setShowEditSelectCompanyModal(false);
						setShowSelectCompanyModal(false);
					}}
				/>
			</Modal>

			<View style={styles.companyOptions}>
				<CompanyFieldOption
					text="Select Company"
					onPress={() => setShowSelectCompanyModal(true)}
				/>
				<CompanyFieldOption
					text="Add New Company"
					onPress={() => setShowAddCompanyModal(true)}
				/>
			</View>
			<NonEditableFields />
		</View>
	);
}

const styles = StyleSheet.create({
	companyContainer: {
		width: "100%",
		marginBottom: 15
	},
	modalContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 15
	},
	companyOptions: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
});
