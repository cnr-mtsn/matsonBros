import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import InteriorDetails from "./InteriorDetails";
import ExteriorDetails from "./ExteriorDetails";

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

  const data = {
    builder,
    location,
    startDate,
    walls,
    enamel,
    interiorStain,
    exteriorStain,
    garage,
    ceilings,
    accent,
    body,
    trim,
  };

  return (
    <View style={styles.cardInfo}>
      <View style={styles.siteInfo}>
        <Text style={styles.siteInfoText}>{builder}</Text>
        <View style={styles.siteInfoInner}>
          <Text style={{ marginRight: 30 }}>{location}</Text>
          <Text style={{ marginLeft: 20 }}>{startDate}</Text>
        </View>
      </View>
      <View style={styles.colors}>
        <InteriorDetails
          data={{ walls, enamel, interiorStain, garage, ceilings }}
        />
        <ExteriorDetails data={{ body, trim, accent, exteriorStain }} />
      </View>
      <View style={styles.bottomSection}>
        <Button
          style={styles.editButton}
          title='Edit Site Details'
          color='#F5F3F5'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardInfo: {
    padding: 15,
    backgroundColor: "#544E61",
    flex: 1,
  },
  siteInfo: {
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F5F3F5",
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
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
