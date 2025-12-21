import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

const shoes = [
  {
    id: 1,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    id: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/custom-nike-dunk-low-by-you-su24.png",
  },
  {
    id: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/custom-nike-air-force-1-mid-by-you-su24.png",
  },
  {
    id: 4,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/custom-nike-air-force-1-low-by-you-su24.png",
  },
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
              source={{ uri: shoe.image }}
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
