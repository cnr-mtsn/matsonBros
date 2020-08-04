import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import InteriorDetails from "./InteriorDetails";
import ExteriorDetails from "./ExteriorDetails";
import Edit from "./EditButton";
import { SafeAreaView } from "react-navigation";

export default function JobDetails({ navigation }) {
  const builder = navigation.getParam("builder");
  const location = navigation.getParam("location");
  const startDate = navigation.getParam("startDate");
  const walls = navigation.getParam("walls");
  const enamel = navigation.getParam("enamel");
  const interiorStain = navigation.getParam("interiorStain");
  const ceilings = navigation.getParam("ceilings");
  const garage = navigation.getParam("garage");
  const body = navigation.getParam("body");
  const trim = navigation.getParam("trim");
  const accent = navigation.getParam("accent");
  const exteriorStain = navigation.getParam("exteriorStain");

  return (
    <SafeAreaView style={styles.cardInfo}>
      <View style={styles.siteInfo}>
        <Text style={styles.siteInfoText}>{builder}</Text>
        <View style={styles.siteInfoInner}>
          <Text style={{ flex: 1, textAlign: "center" }}>{location}</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>{startDate}</Text>
        </View>
      </View>
      <View style={styles.colors}>
        <InteriorDetails
          data={{ walls, enamel, interiorStain, garage, ceilings }}
        />
        <ExteriorDetails data={{ body, trim, accent, exteriorStain }} />
      </View>
      <View style={styles.bottomSection}>
        <Edit name='edit' size={24} color='black' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor: "#e9eef5",
    flex: 1,
  },
  siteInfo: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eff1f3",
  },
  siteInfoText: {
    fontSize: 18,
    padding: 5,
  },
  siteInfoInner: {
    flexDirection: "row",
    marginTop: 5,
  },
  colors: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomSection: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
