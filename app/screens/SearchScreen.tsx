import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="flex-1 px-4 mt-6">
        <Text className="text-2xl font-bold text-gray-900 mb-4">Search</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 text-base"
          placeholder="Search for shoes, apparel..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-400 text-base">
            Start searching for products
          </Text>
        </View>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

export default SearchScreen;
