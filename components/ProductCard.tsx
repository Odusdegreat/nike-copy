import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  id: number;
  image: any;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
}) => {
  const handlePress = () => {
    console.log(`Product ${id} pressed: ${title}`);
  };

  return (
    <TouchableOpacity className="w-32 mx-2" onPress={handlePress}>
      <Image
        source={image}
        className="w-full h-40 rounded-lg bg-gray-100"
        resizeMode="cover"
      />
      <Text className="text-sm font-semibold text-gray-900 mt-2">{title}</Text>
      <View className="flex-row items-center mt-1">
        {originalPrice && (
          <Text className="text-xs text-gray-400 line-through mr-2">
            {originalPrice}
          </Text>
        )}
        <Text className="text-sm font-bold text-gray-900">{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
