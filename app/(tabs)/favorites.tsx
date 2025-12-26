import { Heart } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";
import Screen from "../../components/layout/Screen";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../constants/product";

export default function FavoritesScreen() {
  // For demo purposes, showing first 2 products
  const favoriteProducts = PRODUCTS.slice(0, 2);

  return (
    <Screen scroll={false}>
      <View className="flex-1">
        <View className="px-4 pb-4">
          <Text className="text-3xl font-bold">Favorites</Text>
        </View>

        {favoriteProducts.length === 0 ? (
          <View className="flex-1 items-center justify-center px-4">
            <Heart size={64} color="#ccc" strokeWidth={1.5} />
            <Text className="text-2xl font-bold mt-4">No Favorites Yet</Text>
            <Text className="text-gray-600 text-center mt-2 text-base">
              Save your favorite items by tapping the heart icon
            </Text>
          </View>
        ) : (
          <FlatList
            data={favoriteProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </View>
    </Screen>
  );
}
