import { Image, Text, View } from "react-native";

export default function HeroCard() {
  return (
    <View className="bg-black rounded-2xl p-5 mb-6">
      <Text className="text-white text-xl font-bold mb-2">
        New Nike Collection
      </Text>
      <Text className="text-gray-300 mb-4">Discover the latest drops</Text>
      <Image
        source={require("@/assets/nike-banner.png")}
        className="w-full h-40"
        resizeMode="contain"
      />
    </View>
  );
}
