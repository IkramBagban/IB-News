import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const categories = [
  "Technology",
  "Politics",
  "Sports",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "World"
];

const CategoryList = () => {
  const navigation= useNavigation()

  return (

    <View style={{width:'100%' }}>
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(_, idx) => idx}
      renderItem={({ item }, idx) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CategoryNewsList", { item })
          }
        >
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View> 
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: 150,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#333",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  categoryText:{
    alignSelf:'center',
    color:'white',
    fontWeight:"bold"
  }
});
export default CategoryList;