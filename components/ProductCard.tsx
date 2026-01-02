import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.38;

  const handlePress = () => {
    if (product.id === "nike-woman") {
      router.push("/product");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      activeOpacity={product.id === "nike-woman" ? 0.85 : 1}
      onPress={handlePress}
      disabled={product.id !== "nike-woman"}
    >
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name} numberOfLines={1}>
        {product.name}
      </Text>

      <Text style={styles.category} numberOfLines={1}>
        {product.category}
      </Text>

      <Text style={styles.price}>{product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 14,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 16,
    resizeMode: "cover",
  },
  name: {
    marginTop: 6,
    fontWeight: "600",
  },
  category: {
    fontSize: 12,
    color: "#6B7280",
  },
  price: {
    marginTop: 4,
    fontWeight: "500",
  },
});
