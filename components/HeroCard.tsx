import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { HERO_PRODUCTS } from "../constants/product";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 32; // 16px margin on each side

export default function HeroCard() {
  const product = HERO_PRODUCTS[0];

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="mx-4 my-3 rounded-2xl overflow-hidden"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          style={{
            width: CARD_WIDTH,
            height: CARD_WIDTH * 0.7,
          }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          className="absolute bottom-0 left-0 right-0 p-5"
          style={{ height: 140 }}
        >
          <Text className="text-white text-2xl font-bold mb-2">
            {product.description}
          </Text>
          <Text className="text-white/90 text-sm leading-5">
            The perfect place to find your new favorite running shoes
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
