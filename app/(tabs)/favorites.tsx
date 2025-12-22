import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../../components/Header";
import { HeartIcon } from "../../components/Icons";

export default function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="flex-1 px-4 mt-6">
        <Text className="text-2xl font-bold text-gray-900 mb-4">Favorites</Text>
        <View className="flex-1 justify-center items-center">
          <HeartIcon size={64} color="#e5e5e5" />
          <Text className="text-gray-400 text-base mt-4">No favorites yet</Text>
          <Text className="text-gray-400 text-sm mt-2 text-center">
            Start adding products to your favorites
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
