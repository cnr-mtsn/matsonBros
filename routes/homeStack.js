import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import JobDetails from "../components/JobDetails";
import Search from "../components/Search";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Matson Bros. Painting",
    },
  },
  Search: {
    screen: Search,
  },
  JobDetails: {
    screen: JobDetails,
    navigationOptions: {
      headerBackTitle: "Back to Sites",
      title: "Site Details",
    },
  },
};

const Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",

    headerStyle: {
      backgroundColor: "#3f86cc",
    },
  },
});

export default createAppContainer(Stack);
