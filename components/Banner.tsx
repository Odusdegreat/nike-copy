import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function Banner() {
  const { width } = useWindowDimensions();
  const imageWidth = (width - 64) / 2;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../assets/images/shoe1.png")}
          style={[styles.image, { width: imageWidth }]}
        />
        <Image
          source={require("../assets/images/shoe2.png")}
          style={[styles.image, { width: imageWidth }]}
        />
      </View>

      <View style={styles.row}>
        <Image
          source={require("../assets/images/shoe3.png")}
          style={[styles.image, { width: imageWidth }]}
        />
        <Image
          source={require("../assets/images/shoe4.png")}
          style={[styles.image, { width: imageWidth }]}
        />
      </View>

      <Text style={styles.title}>Made For Miles</Text>
      <Text style={styles.subtitle}>
        The perfect place to find your new{"\n"}
        favorite running shoes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 28,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  image: {
    height: 70,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
    lineHeight: 16,
  },
});
