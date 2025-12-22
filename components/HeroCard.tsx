import { Image, Text, View, TouchableOpacity } from "react-native";

export default function HeroCard() {
  return (
    <View className="bg-black rounded-3xl p-5 mb-6">
      <Image
        source={require("../assets/nike-banner.png")}
        className="h-40 w-full rounded-2xl"
        resizeMode="cover"
      />

      <Text className="text-white text-xl font-bold mt-4">
        Made For Miles
      </Text>

      <Text className="text-gray-300 text-sm mt-1">
        Performance gear for everyday runs
      </Text>

      <TouchableOpacity className="bg-white mt-4 py-3 rounded-full items-center">
        <Text className="font-semibold">Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
}
