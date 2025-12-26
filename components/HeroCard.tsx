import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HERO_PRODUCTS } from "../constants/product";

const { width } = Dimensions.get("window");
const SCREEN_PADDING = 20;
const CARD_WIDTH = width - SCREEN_PADDING * 2;
const CARD_HEIGHT = CARD_WIDTH * 0.6;

export default function HeroCard() {
  const product = HERO_PRODUCTS[0];

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={[styles.image, { width: CARD_WIDTH, height: CARD_HEIGHT }]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.85)"]}
          style={styles.gradient}
        >
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.subtitle}>
            The perfect place to find your new{"\n"}favorite running shoes
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: SCREEN_PADDING,
    marginVertical: 15,
  },
  container: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    backgroundColor: "#f0f0f0",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 13,
    lineHeight: 18,
  },
});
