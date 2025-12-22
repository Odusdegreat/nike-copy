import HeroCard from "@/components/HeroCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ScrollView, Text, View } from "react-native";
import NikeLogo from "../../assets/nike-logo.svg"; // ✅ import logo

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white px-4 pt-12">
      <NikeLogo width={120} height={40} className="mb-4" />{" "}
      {/* replace text with logo */}
      <HeroCard />
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold">New Arrivals</Text>
        <Text className="text-gray-500 text-sm">See all</Text>
      </View>
      <View className="flex-row flex-wrap justify-between">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}
