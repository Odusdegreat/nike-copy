import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
  item: {
    id: number;
    name: string;
    price: string;
    image: ImageSourcePropType;
  };
};

export default function ProductCard({ item }: Props) {
  return (
    <View className="bg-gray-100 rounded-xl p-3">
      <Image
        source={item.image}
        className="w-full h-28 mb-2 rounded-xl"
        resizeMode="contain"
      />
      <Text className="font-semibold">{item.name}</Text>
      <Text className="text-gray-500">{item.price}</Text>
    </View>
  );
}
