import HeroCard from "@/components/HeroCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-4"
      >
        {/* Header */}
        <Image
          source={require("@/assets/images/nike-logo.png")}
          className="w-32 h-10 mb-4"
          resizeMode="contain"
        />

        {/* Collection Title */}
        <Text className="text-2xl font-semibold">New Nike Collection</Text>
        <Text className="text-gray-500 mb-6">Discover the latest drops</Text>

        {/* Hero Section */}
        <HeroCard />

        {/* New Arrivals */}
        <View className="flex-row justify-between items-center mt-8 mb-4">
          <Text className="text-lg font-semibold">New Arrivals</Text>
          <Text className="text-gray-500">See all</Text>
        </View>

        {/* Products Grid */}
        <View className="flex-row flex-wrap -mx-2 mb-24">
          {products.map((item) => (
            <View key={item.id} className="w-1/2 px-2 mb-4">
              <ProductCard item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
