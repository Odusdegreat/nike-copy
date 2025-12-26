import { Heart } from "lucide-react-native";
import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 32;

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      className="mx-4 mb-4 rounded-xl overflow-hidden bg-white"
      activeOpacity={0.8}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          style={{
            width: CARD_WIDTH,
            height: CARD_WIDTH * 0.75,
          }}
          resizeMode="cover"
          className="bg-gray-100"
        />
        <TouchableOpacity
          className="absolute top-3 right-3 bg-white rounded-full p-2"
          onPress={() => setLiked(!liked)}
          activeOpacity={0.7}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
          }}
        >
          <Heart
            size={20}
            color={liked ? "#FF0000" : "#000"}
            fill={liked ? "#FF0000" : "none"}
          />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-orange-600 text-xs font-bold mb-1 uppercase tracking-wide">
          Just In
        </Text>
        <Text className="font-bold text-lg mb-1" numberOfLines={1}>
          {product.name}
        </Text>
        <Text className="text-gray-600 text-sm mb-2" numberOfLines={1}>
          {product.category}
        </Text>
        <Text className="font-bold text-lg">${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
