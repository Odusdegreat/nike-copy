import { Heart } from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Product } from "../types";

const { width } = Dimensions.get("window");
const SCREEN_PADDING = 20;
const CARD_WIDTH = width - SCREEN_PADDING * 2;
const IMAGE_HEIGHT = CARD_WIDTH * 0.7;

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        activeOpacity={0.8}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={[styles.image, { width: CARD_WIDTH, height: IMAGE_HEIGHT }]}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.heartButton}
            onPress={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            activeOpacity={0.7}
          >
            <Heart
              size={18}
              color={liked ? "#FF0000" : "#000"}
              fill={liked ? "#FF0000" : "none"}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.badge}>JUST IN</Text>
          <Text style={styles.name} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={styles.category} numberOfLines={1}>
            {product.category}
          </Text>
          <Text style={styles.price}>
            ₦{(product.price * 1500).toLocaleString()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 20,
  },
  container: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#f8f8f8",
  },
  image: {
    backgroundColor: "#f0f0f0",
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  contentContainer: {
    padding: 16,
  },
  badge: {
    color: "#ff6b00",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
});
