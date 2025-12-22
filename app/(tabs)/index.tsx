import NikeLogo from "@/assets/images/nike-logo.svg";
import HeroCard from "@/components/HeroCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white px-4 pt-12"
    >
      {/* Header */}
      <NikeLogo width={120} height={40} style={{ marginBottom: 20 }} />

      {/* Hero */}
      <HeroCard />

      {/* Section title */}
      <View className="flex-row justify-between items-center mb-4 mt-6">
        <Text className="text-lg font-bold">New Arrivals</Text>
        <Text className="text-gray-500 text-sm">See all</Text>
      </View>

      {/* Products */}
      <View className="flex-row flex-wrap justify-between">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
