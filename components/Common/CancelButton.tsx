import React from "react";
import { Button } from "react-native";

export default function CancelButton({ title, onPress }) {
  return <Button title={title} color="red" onPress={onPress} />;
}
