import React, { useEffect, useMemo } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { useGetNewsQuery } from "../reduxToolkit/apiSlice";

const CategoryNewsList = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const {
    data: newsDetail,
    isLoading,
    isError,
  } = useGetNewsQuery(`v2/everything?q=${item}`);

  useEffect(() => {
    if (isError) {
      console.log("Error fetching news from API:");
    }

  }, [isError]);

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
});

export default CategoryNewsList;
