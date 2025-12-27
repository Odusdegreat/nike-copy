import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/theme";

export default function HeroCard() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/x8Q9ZJg.png" }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Made For Miles</Text>
      <Text style={styles.subtitle}>
        The perfect place to find your new favorite running shoes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: Colors.lightGray,
    borderRadius: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 160,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 6,
  },
});
