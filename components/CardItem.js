import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CardItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{props.category}</Text>
      <Text style={styles.data}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  category: {
    flex: 1,
    fontSize: 16,
  },
  data: {
    flex: 1,
    fontSize: 16,
  },
});
