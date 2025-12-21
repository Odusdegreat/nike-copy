import React from "react";
import { ScrollView, Text, View } from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-tech-fleece-reimagined-mens-full-zip-hoodie-Gc3sSG.png",
    title: "Tech Fleece",
    price: "$110",
  },
  {
    id: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1ddf67e-ef1a-4e2e-87f4-b0fff3a0c3e8/dri-fit-indy-womens-light-support-padded-sports-bra-RHV8pT.png",
    title: "Indy Luxe",
    price: "$36",
    originalPrice: "$80",
  },
  {
    id: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-fb7ced3d-34c7-4c73-ab47-f79a30e2d8d5/space-hippie-04-mens-shoes-rVtTGV.png",
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
