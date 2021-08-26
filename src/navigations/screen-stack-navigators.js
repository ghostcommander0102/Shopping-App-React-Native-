import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home/Home";
import WelcomeScreen from "../screens/Account/WelcomeScreen";
//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
});

export const WelcomeScreenNavigator = createStackNavigator({
    WelcomeScreen: { screen: WelcomeScreen }
});
