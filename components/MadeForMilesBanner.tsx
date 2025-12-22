import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MadeForMilesBanner = () => {
  const handleBannerPress = () => {
    console.log("Banner pressed");
  };

  return (
    <View className="px-4 mt-6">
      <TouchableOpacity onPress={handleBannerPress}>
        <Image
          source={require("../assets/nike-banner.png")}
          className="w-full h-40 rounded-lg bg-gray-100"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View className="mt-4">
        <Text className="text-xl font-bold text-gray-900">Made For Miles</Text>
        <Text className="text-sm text-gray-500 mt-1">
          The perfect place to find your new{"\n"}favorite running shoes
        </Text>
      </View>
    </View>
  );
};

export default MadeForMilesBanner;
