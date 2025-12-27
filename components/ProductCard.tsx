import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/theme";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>{product.subtitle}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginRight: 16,
  },
  imageBox: {
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    padding: 12,
  },
  image: {
    width: "100%",
    height: 90,
  },
  title: {
    marginTop: 8,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 12,
    color: Colors.gray,
  },
  price: {
    marginTop: 4,
    fontWeight: "600",
  },
});
