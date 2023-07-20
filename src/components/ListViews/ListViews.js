import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const API_BASE_URL =
  "https://crudcrud.com/api/40e2d104fe1e4ff6a6e7595e76946e73";

const ListViews = () => {
  const navigation = useNavigation();

  const [staffList, setStaffList] = useState([]);

  const fetchStaffList = async () => {
    const response = await axios.get(`${API_BASE_URL}/zamara`);
    setStaffList(response.data);
  };

  useEffect(() => {
    fetchStaffList();
  }, []);

  const exampleProducts = [
    {
      product_id: "0",
      product_name: "cup",
      category: "groceries",
      price: 400,
      quantity_in_stock: 10,
    },
    {
      product_id: "1",
      product_name: "pen",
      category: "stationery",
      price: 50,
      quantity_in_stock: 25,
    },
    {
      product_id: "2",
      product_name: "t-shirt",
      category: "clothing",
      price: 800,
      quantity_in_stock: 15,
    },
    {
      product_id: "3",
      product_name: "bread",
      category: "groceries",
      price: 30,
      quantity_in_stock: 50,
    },
    {
      product_id: "4",
      product_name: "keyboard",
      category: "electronics",
      price: 1500,
      quantity_in_stock: 5,
    },
  ];

  return (
    <>
      <FlatList
        data={exampleProducts}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => (
          <ListItem staff={item} navigation={navigation} />
        )}
      />
    </>
  );
};

const ListItem = ({ staff, navigation }) => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#ccc",
        }}
      >
        <View
          style={{
            paddingVertical: 15,
            paddingRight: 5,
          }}
        >
          <MaterialCommunityIcons name="package" color="green" size={40} />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("StaffDetails", { staff })}
          >
            <View style={styles.rightView}>
              <View style={styles.instack}>
                <Text style={styles.boldText}>Name: </Text>
                <Text> {staff?.product_name} </Text>
              </View>
              <View style={styles.instack}>
                <Text style={styles.boldText}>Category: </Text>
                <Text>{staff?.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.leftView}>
            <View style={styles.instack}>
              <Text style={styles.boldText}>Price: </Text>
              <Text> {staff?.price} </Text>
              <Text>KSH</Text>
            </View>
            <View style={styles.instack}>
              <Text style={styles.boldText}>In stock: </Text>
              <Text>{staff?.quantity_in_stock}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },

  leftView: {
    flex: 1,
    alignItems: "flex-end",
  },
  instack: {
    flexDirection: "row",
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default ListViews;
