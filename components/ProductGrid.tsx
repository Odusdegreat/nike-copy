import { StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

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
