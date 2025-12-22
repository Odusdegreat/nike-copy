import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ShoppingBagIcon } from "./Icons";

const Header = () => {
  const handleBagPress = () => {
    console.log("Shopping bag pressed");
  };

  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      <Image
        source={require("../assets/nike-logo.png")}
        className="w-12 h-12"
        resizeMode="contain"
      />
      <TouchableOpacity onPress={handleBagPress}>
        <ShoppingBagIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
