import React from "react";
import { ScrollView, Text, View } from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: require("../assets/product1.png"),
    title: "Tech Fleece",
    price: "$110",
  },
  {
    id: 2,
    image: require("../assets/product2.png"),
    title: "Indy Luxe",
    price: "$36",
    originalPrice: "$80",
  },
  {
    id: 3,
    image: require("../assets/product3.png"),
    title: "Space",
    price: "$130",
  },
];

const LatestProducts = () => {
  return (
    <View className="px-4 mt-8">
      <Text className="text-xl font-bold text-gray-900 mb-4">
        The Latest And Greatest
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="-mx-2"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default LatestProducts;
