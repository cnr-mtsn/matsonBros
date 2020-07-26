import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Card from "./DetailsCard";
import CardItem from "./CardItem";

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
    <Card>
      <CardItem category='Builder' data={builder} />
      <CardItem category='Location' data={location} />
      <CardItem category='Start Date' data={startDate} />
      <CardItem category='Walls' data={walls} />
      <CardItem category='Enamel' data={enamel} />
      <CardItem category='Interior Stain' data={interiorStain} />
      <CardItem category='Ceilings' data={ceilings} />
      <CardItem category='Garage' data={garage} />
      <CardItem category='Body' data={body} />
      <CardItem category='Trim' data={trim} />
      <CardItem category='Accent' data={accent} />
      <CardItem category='Exterior Stain' data={exteriorStain} />
    </Card>
  );
}
