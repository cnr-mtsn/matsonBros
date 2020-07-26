import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import JobDetails from "../components/JobDetails";
import Search from "../components/Search";

const screens = {
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  JobDetails: {
    screen: JobDetails,
  },
};

const Stack = createStackNavigator(screens, {
  shifting: true,
  labeled: false,
  barStyle: {
    height: 60,
    borderTopColor: "#d5d6d4",
    borderTopWidth: 1,
    justifyContent: "center",
  },
});

export default createAppContainer(Stack);
