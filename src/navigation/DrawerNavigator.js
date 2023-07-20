import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import RewardScreen from "./screens/RewardScreen";
import LocationScreen from "./screens/LocationScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Drawer.Screen
        name={"Sock Management"}
        component={BottomTabNavigator}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={"MyRewardsStackNavigator"}
        component={RewardScreen}
        options={{
          drawerLabel: "Rewards",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="firewire" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});

export default DrawerNavigator;
