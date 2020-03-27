import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Form from "./components/Form";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.viewport}>
        <Form />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewport: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 15
  }
});
