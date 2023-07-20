import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListViews from "../../components/ListViews/ListViews";

const ItemsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="plus" color="green" size={40} />
      </View>
      <ListViews />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
});

export default ItemsScreen;
