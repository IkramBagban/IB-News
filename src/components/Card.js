
import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

 const Card = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
  {    <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl
              ? imageUrl
              : "https://img.freepik.com/free-vector/did-you-know-with-megaphone-text-space_1017-25697.jpg?size=626&ext=jpg&ga=GA1.2.1011732169.1689813271&semt=sph",
          }}
        />
      </View>}
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
          marginVertical: 10,
      marginHorizontal: 25,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailContainer: {
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "#aaa",
    fontSize: 14,
    lineHeight: 20,
  },
});
export default Card;
