// src/components/Navigation.tsx
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Navigation: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind("flex-row justify-between items-center p-4 bg-primary")}
    >
      {/* Logo */}
      <TouchableOpacity>
        <Image
          source={require("../assets/nike-logo.png")} // Make sure you have a logo image in assets
          style={tailwind("w-10 h-10")} // Adjust size as needed
        />
      </TouchableOpacity>

      {/* Menu Icon */}
      <TouchableOpacity>
        <View
          style={tailwind(
            "w-12 h-12 bg-white rounded-full flex justify-center items-center"
          )}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_icon.svg",
            }}
            style={tailwind("w-6 h-6")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
