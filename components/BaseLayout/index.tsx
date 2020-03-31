import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

export default function BaseLayout(props) {
  return (
    <View style={styles.view}>
      <Header />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%"
  }
});
