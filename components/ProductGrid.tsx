import { StyleSheet, Text, View } from "react-native";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 20,
    color: "#000",
  },
});
