// src/components/BottomNav.tsx
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
const BottomNav: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        "absolute bottom-0 w-full bg-primary p-4 flex-row justify-around"
      )}
    >
      <TouchableOpacity style={tailwind("flex items-center justify-center")}>
        <Text style={tailwind("text-white")}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind("flex items-center justify-center")}>
        <Text style={tailwind("text-white")}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
