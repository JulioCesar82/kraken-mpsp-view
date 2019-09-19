import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import { ShowCaseStack, OptionsStack } from "./AppRoutes";

const TabRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: ShowCaseStack,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Image
            source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Sd6kPUaHaKIXYxRmcZkXgYaDWro_kmIr2sKnjvFaFgfqWIaN"
            }}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    },
    Options: {
      screen: OptionsStack,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Image
            source={{
                uri: "https://cdn4.iconfinder.com/data/icons/glyph-ui-icons-part-2/22/menu-512.png"
            }}
            style={[styles.icon, { tintColor: tintColor }]}
          />
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
        style: {
          backgroundColor: "black",
          height: 55
        },
        activeTintColor: "green",
        inactiveTintColor: "white"
      }
    })
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    padding: 10
  },
  containerCenter: {
    backgroundColor: "blue",
    borderWidth: 5,
    borderRadius: 50,
    borderColor: "black",
    marginTop: -20,
    padding: 10
  }
});

export default TabRoutes;
