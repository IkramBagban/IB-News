import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import CategoryList from "../components/CategoryList";
import { useGetTopHeadlineNewsQuery } from "../reduxToolkit/apiSlice";
import Card from "../components/Card";

const Home = ({ navigation }) => {
  const { data: newsDetail, isLoading } = useGetTopHeadlineNewsQuery();

  return (
    <View style={styles.container}>
      <View style={{}}>
        <CategoryList />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <FlatList
            data={newsDetail ? newsDetail?.articles : []}
            keyExtractor={(item, idx) => idx}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("NewsDetail", { item })}
                >
                  <Card
                    title={item.title}
                    description={item.description}
                    imageUrl={item.urlToImage}
                  />
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginLeft: 10,
  },

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
  categoryText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
