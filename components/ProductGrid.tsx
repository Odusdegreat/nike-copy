import { Text, View } from "react-native";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <View className="mt-6">
      <Text className="text-2xl font-bold px-4 mb-4">{title}</Text>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
}
