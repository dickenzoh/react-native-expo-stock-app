import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import ItemsScreen from "./screens/ItemScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{}}>
      <Tab.Screen
        name={"HomeStackNavigator"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"BookStackNavigator"}
        component={ItemsScreen}
        options={{
          tabBarLabel: "Items",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-blank-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"ContactStackNavigator"}
        component={ContactScreen}
        options={{
          tabBarLabel: "Contact",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;
