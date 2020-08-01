import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function JobCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.data.builder}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>{props.data.location}</Text>
        <Text style={styles.infoText}>{props.data.startDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    minHeight: 50,
    padding: 10,
    backgroundColor: "#C4CFD4",
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  infoText: {
    fontSize: 16,
  },
});
