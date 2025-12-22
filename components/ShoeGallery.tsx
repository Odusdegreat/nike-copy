import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

const shoes = [
  { id: 1, image: require("../assets/shoe1.png") },
  { id: 2, image: require("../assets/shoe2.png") },
  { id: 3, image: require("../assets/shoe3.png") },
  { id: 4, image: require("../assets/shoe4.png") },
];

const ShoeGallery = () => {
  const handleShoePress = (id: number) => {
    console.log(`Shoe ${id} pressed`);
  };

  return (
    <View className="px-4 mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row -mx-2"
      >
        {shoes.map((shoe) => (
          <TouchableOpacity
            key={shoe.id}
            className="w-40 mx-2"
            onPress={() => handleShoePress(shoe.id)}
          >
            <Image
              source={shoe.image}
              className="w-full h-32 rounded-lg bg-gray-100"
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShoeGallery;
