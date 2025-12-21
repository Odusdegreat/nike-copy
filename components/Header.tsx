import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ShoppingBagIcon } from "../components/Icons";

const Header = () => {
  const handleBagPress = () => {
    console.log("Shopping bag pressed");
  };

  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        }}
        className="w-16 h-6"
        resizeMode="contain"
      />
      <TouchableOpacity onPress={handleBagPress}>
        <ShoppingBagIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
