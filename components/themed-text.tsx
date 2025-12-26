import { Heart } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-lg overflow-hidden mb-4 mx-4"
      activeOpacity={0.7}
    >
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          className="w-full h-48 bg-gray-100"
          resizeMode="cover"
        />
        <TouchableOpacity className="absolute top-3 right-3 bg-white rounded-full p-2">
          <Heart size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View className="p-3">
        <Text className="text-orange-600 text-xs font-semibold mb-1">
          Just In
        </Text>
        <Text className="font-semibold text-base mb-1">{product.name}</Text>
        <Text className="text-gray-600 text-sm mb-2">{product.category}</Text>
        <Text className="font-bold text-base">${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
