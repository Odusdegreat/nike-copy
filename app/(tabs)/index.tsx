import HeroCard from "@/components/HeroCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      className="flex-1 bg-white px-4 pt-12"
    >
      {/* Header - using PNG for stability */}
      <Image
        source={require("@/assets/images/nike-logo.png")}
        style={{ width: 120, height: 40, marginBottom: 20 }}
        resizeMode="contain"
      />

      {/* Hero section */}
      <HeroCard />

      {/* Section title */}
      <View className="flex-row justify-between items-center mb-4 mt-6">
        <Text className="text-lg font-bold">New Arrivals</Text>
        <Text className="text-gray-500 text-sm">See all</Text>
      </View>

      {/* Products grid */}
      <View className="flex-row flex-wrap -mx-2">
        {products.map((item) => (
          <View key={item.id} className="w-1/2 px-2 mb-4">
            <ProductCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
