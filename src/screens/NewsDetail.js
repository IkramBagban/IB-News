import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const NewsDetail = ({ route }) => {
  const { url, urlToImage, title, content, author, publishedAt, source:{name} } =
    route.params.item;

  const learnMore = () => {
    Linking.openURL(url)
      .then(() => {
        console.log("External URL opened successfully.");
      })
      .catch((error) => {
        console.error("Error opening the external URL:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: urlToImage || 'https://img.freepik.com/free-vector/did-you-know-with-megaphone-text-space_1017-25697.jpg?size=626&ext=jpg&ga=GA1.2.1011732169.1689813271&semt=sph' }} />
        <View style={styles.imageTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{publishedAt.slice(0,10)} | {name}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={learnMore} style={styles.learnMoreButton}>
          <Text style={styles.learnMoreText}>Learn More...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    color: "#BBB",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  contentContainer: {
    padding: 15,
  },
  content: {
    fontSize: 16,
    color: "#EEE",
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  learnMoreText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default NewsDetail;
