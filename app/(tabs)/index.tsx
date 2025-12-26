import { ShoppingBag } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import HeroCard from "../../components/HeroCard";
import Screen from "../../components/layout/Screen";
import ProductGrid from "../../components/ProductGrid";
import { PRODUCTS } from "../../constants/product";

export default function HomeScreen() {
  return (
    <Screen>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pb-3">
        <Text className="text-4xl font-bold">✓</Text>
        <TouchableOpacity className="p-2" activeOpacity={0.7}>
          <ShoppingBag size={26} color="#000" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <HeroCard />

      <ProductGrid title="The Latest And Greatest" products={PRODUCTS} />
    </Screen>
  );
}
