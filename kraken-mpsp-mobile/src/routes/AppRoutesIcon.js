import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { ShowCaseStack, OptionsStack } from "./AppRoutes";

import Icon from 'react-native-vector-icons/FontAwesome';

const TabRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: ShowCaseStack,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
         <Icon name="home" size={30} color="#900" />
        )
      }
    },
    Options: {
      screen: OptionsStack,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
         <Icon name="bars" size={30} color="#900" />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        console.log("onPress icon", navigation.state.routeName);
        navigation.popToTop();
        defaultHandler();
      },
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.tab,
        activeTintColor: "green",
        inactiveTintColor: "white"
      }
    })
  }
);

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "gray",
    height: 55
  },
  icon: {
    width: 20,
    height: 20,
    padding: 10
  },
});

export default TabRoutes;
