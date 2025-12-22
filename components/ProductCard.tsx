import { Image, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: string;
  price: string;
  image: any;
};

export default function ProductCard({ name, price, image }: Props) {
  return (
    <View className="w-[48%] mb-6">
      <View className="bg-gray-100 rounded-2xl p-3 relative">
        <TouchableOpacity className="absolute right-3 top-3 z-10">
          <Ionicons name="heart-outline" size={20} color="#000" />
        </TouchableOpacity>

        <Image
          source={image}
          className="h-28 w-full"
          resizeMode="contain"
        />
      </View>

      <Text className="mt-2 font-semibold text-sm">
        {name}
      </Text>
      <Text className="text-gray-500 text-sm">
        {price}
      </Text>
    </View>
  );
}
