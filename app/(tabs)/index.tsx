import { ShoppingBag } from "lucide-react-native";
import { Text, View } from "react-native";
import HeroCard from "../../components/HeroCard";
import Screen from "../../components/layout/Screen";
import ProductGrid from "../../components/ProductGrid";
import { PRODUCTS } from "../../constants/product";

export default function HomeScreen() {
  return (
    <Screen>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-12 pb-4">
        <Text className="text-3xl font-bold">✓</Text>
        <ShoppingBag size={24} color="#000" />
      </View>

      <HeroCard />

      <ProductGrid title="The Latest And Greatest" products={PRODUCTS} />

      <View className="h-20" />
    </Screen>
  );
}
