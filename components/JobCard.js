import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function JobCard(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: "rgb(56, 97, 140)",
    minHeight: 50,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(237, 230, 227)",
  },
});
