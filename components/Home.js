import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Card from "../components/JobCard";

export default function Home({ navigation }) {
  const jobs = [
    {
      builder: "Chad McGraw",
      location: "312",
      startDate: "7/15/2020",
      walls: "TBA",
      enamel: "Pure White & Iron Ore",
      interiorStain: "dark",
      ceilings: "Matson White",
      garage: "Alabaster Gray",
      body: "TBA",
      trim: "TBA",
      accent: "TBA",
      exteriorStain: "TBA",
    },
    {
      builder: "Chad McGraw",
      location: "324",
      startDate: "6/20/2020",
      walls: "Crushed Ice",
      enamel: "Pure White & Iron Ore",
      interiorStain: "grey",
      ceilings: "Crushed Ice",
      garage: "Crushed Ice",
      body: "White",
      trim: "black",
      accent: "brown",
      exteriorStain: "dark walnut",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={jobs}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("JobDetails", item);
            }}
          >
            <Card>
              <Text style={styles.cardText}>
                {item.builder} - {item.location} - {item.startDate}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* INSERT CIRCULAR BUTTON TO ADD A NEW JOB CARD TO THE DECK */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  listStyle: {
    flexWrap: "wrap",
  },
  cardText: {
    fontSize: 20,
  },
});
