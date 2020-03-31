import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Modal,
	Button,
	TouchableOpacity,
	Picker
} from "react-native";
import { ICurrencyInput, ICurrency } from "../../App.models";
import { CURRENCIES } from "../../lib/constants";
import { GRADIENTS } from "../../lib/styles";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../Common/Input";

export default function BillableRateInput(props: ICurrencyInput) {
	const [showModal, setShowModal] = useState(false);

	const setCurrency = (selectedCurrency: string) => {
		const currency: ICurrency = CURRENCIES.find(
			({ name }) => name === selectedCurrency
		);
		props.onCurrencyChange(currency);
	};

	return (
		<View style={styles.inputContainer}>
			<Modal visible={showModal} animationType="slide">
				<View style={styles.modalContainer}>
					<Picker
						selectedValue={props.currency.name}
						style={{ height: 50, width: 150, marginBottom: 100 }}
						onValueChange={itemValue => setCurrency(itemValue)}
					>
						{CURRENCIES.map(({ name }) => (
							<Picker.Item key={name} label={name} value={name} />
						))}
					</Picker>
					<Button title="Select" onPress={() => setShowModal(false)} />
				</View>
			</Modal>
			<Text style={styles.label}>{props.label}</Text>
			<View style={styles.valueContainer}>
				<TouchableOpacity
					onPress={() => setShowModal(true)}
					style={styles.currencySelector}
				>
					<View style={styles.textContainer}>
						<LinearGradient colors={GRADIENTS.grey} style={styles.gradient}>
							<Text style={styles.currency}>{props.currency.name}</Text>
						</LinearGradient>
					</View>
				</TouchableOpacity>
				<Input
					placeholder={props.placeholder}
					style={{ width: "85%" }}
					value={props.value}
					onChangeText={props.onChange}
					keyboardType="numeric"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		marginVertical: 10
	},

	label: {
		marginBottom: 15
	},
	modalContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	valueContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	textContainer: {
		borderWidth: 1,
		borderColor: GRADIENTS.grey[1],
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5,
		flex: 1
	},
	currencySelector: {
		width: "15%"
	},
	gradient: {
		flex: 1,
		justifyContent: "center"
	},
	currency: {
		textAlign: "center"
	}
});
