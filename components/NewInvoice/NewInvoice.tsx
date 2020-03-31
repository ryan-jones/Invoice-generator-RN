import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import FormInput from "./FormInput";
import CompanyDetails from "./CompanyField/CompanyFieldDetails";
import Card from "../Common/Card";
import {
	IFormInput,
	ICurrencyInput,
	Invoice,
	ICurrency
} from "../../App.models";
import useStore from "../../hooks/useStore";
import { SET_NEW_INVOICE } from "../../store";
import { convertCurrencyToNumber, formatCurrency } from "../../lib/utils";
import { FORM_FIELDS, DEFAULT_CURRENCY } from "../../lib/constants";
import camelCase from "lodash/camelCase";
import CancelButton from "../Common/CancelButton";
import ConfirmButton from "../Common/ConfirmButton";

const defaultValues: Invoice = {
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
};

export default function Form() {
	const { state, dispatch } = useStore();
	const [formValues, setFormValues] = useState(state.newInvoice);
	const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

	const updateForm = (key: string, value: string) => {
		const isNumericValue = ["billableQuantity", "billableRate"].includes(key);
		const isInvalidNumeric = isNaN(convertCurrencyToNumber(value, currency));
		if (isNumericValue && isInvalidNumeric) {
			return;
		}
		setFormValues(currentForm => ({
			...currentForm,
			[key]: value
		}));
	};

	const updateFormDate = (dateType: string, key: string, value: string) => {
		let newValues = { ...formValues[dateType], [key]: value };
		setFormValues(currentForm => ({
			...currentForm,
			[dateType]: {
				...newValues
			}
		}));
	};

	const formInputs: (IFormInput | ICurrencyInput)[] = FORM_FIELDS.map(field => {
		const key = camelCase(field.label);
		const defaultValues = {
			...field,
			value: formValues[key],
			onChange: (value: string) => updateForm(key, value)
		};

		switch (field.type) {
			case "currency":
				return {
					...defaultValues,
					currency,
					onCurrencyChange: (curr: ICurrency) => {
						setCurrency(curr);
						updateForm(key, "");
					}
				};
			case "date":
				return {
					...field,
					value: formValues[key],
					setDay: (day: string) => updateFormDate(field.dateType, "day", day),
					setMonth: (month: string) =>
						updateFormDate(field.dateType, "month", month),
					setYear: (year: string) =>
						updateFormDate(field.dateType, "year", year)
				};
			default:
				return defaultValues;
		}
	});

	const totalAmountInvoiced = (): string => {
		const days = Number(formValues.billableQuantity);
		const rate = convertCurrencyToNumber(formValues.billableRate, currency);
		const amount = days * rate;
		return formatCurrency(amount, currency);
	};

	const resetAll = (): void => setFormValues(defaultValues);

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Card>
					<CompanyDetails />
					{formInputs.map((input: IFormInput) => (
						<FormInput key={input.label} {...input} />
					))}
					<Text style={styles.total}>
						Invoiced Amount: {totalAmountInvoiced()}
					</Text>
					<View style={styles.buttonsContainer}>
						<TouchableOpacity>
							<View style={styles.button}>
								<ConfirmButton
									title="Add Invoice"
									onPress={() =>
										dispatch({ type: SET_NEW_INVOICE, payload: formValues })
									}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.button}>
								<CancelButton title="Reset" onPress={resetAll} />
							</View>
						</TouchableOpacity>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		padding: 15,
		backgroundColor: "lightgrey"
	},
	total: {
		marginVertical: 30
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	button: {
		width: 150
	}
});
