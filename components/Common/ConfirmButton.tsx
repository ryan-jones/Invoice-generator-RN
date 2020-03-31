import React from "react";
import { Button } from "react-native";
import { COLORS } from "../../lib/styles";

export default function ConfirmButton({ title, onPress }) {
	return <Button title={title} color={COLORS.secondary} onPress={onPress} />;
}
