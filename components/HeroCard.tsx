import { useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { HERO_PRODUCTS } from "../constants/product";

const { width } = Dimensions.get("window");

export default function HeroCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const product = HERO_PRODUCTS[0];

  return (
    <View className="bg-gray-50 mx-4 my-4 rounded-2xl overflow-hidden">
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          className="w-full h-64"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <Text className="text-white text-2xl font-bold">
            {product.description}
          </Text>
          <Text className="text-white/90 text-sm mt-1">
            The perfect place to find your new favorite running shoes
          </Text>
        </View>
      </View>
    </View>
  );
}
