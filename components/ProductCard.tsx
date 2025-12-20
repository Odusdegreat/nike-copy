// src/components/ProductCard.tsx
import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  oldPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  oldPrice,
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("p-4 bg-white rounded-lg shadow-lg")}>
      <Image
        source={{ uri: imageUrl }}
        style={tailwind("w-full h-36 object-cover rounded-lg")}
      />
      <Text style={tailwind("mt-2 text-lg font-semibold")}>{title}</Text>
      <Text style={tailwind("text-gray-600")}>
        {oldPrice && (
          <Text style={tailwind("line-through text-gray-400")}>{oldPrice}</Text>
        )}
        {price}
      </Text>
    </View>
  );
};

export default ProductCard;
