import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function Banner() {
  const { width } = useWindowDimensions();

  // Slightly wider spacing for a relaxed Nike-style layout
  const imageWidth = (width - 96) / 2;

  return (
    <View style={styles.container}>
      {/* SHOE GRID */}
      <View style={styles.imagesWrapper}>
        <View style={styles.row}>
          <Image
            source={require("../assets/shoe1.png")}
            style={[styles.image, { width: imageWidth }]}
          />
          <Image
            source={require("../assets/shoe2.png")}
            style={[styles.image, { width: imageWidth }]}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={require("../assets/shoe3.png")}
            style={[styles.image, { width: imageWidth }]}
          />
          <Image
            source={require("../assets/shoe4.png")}
            style={[styles.image, { width: imageWidth }]}
          />
        </View>
      </View>

      {/* TEXT CONTENT */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Made for Miles</Text>
        <Text style={styles.subtitle}>
          The perfect place to find your new{"\n"}
          favorite running shoes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 32,
    paddingVertical: 20,
  },

  imagesWrapper: {
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  image: {
    height: 90,
    resizeMode: "contain",
  },

  textWrapper: {
    alignItems: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 18,
  },
});
