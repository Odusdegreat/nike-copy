import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../components/Icons";

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3">
        <Image
          source={require("./assets/nike-logo.png")}
          className="w-12 h-12"
          resizeMode="contain"
        />
        <TouchableOpacity>
          <ShoppingBagIcon />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Running Shoes Section */}
        <View className="px-4 mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row -mx-2"
          >
            <View className="w-40 mx-2">
              <Image
                source={require("./assets/shoe1.png")}
                className="w-full h-32 rounded-lg"
                resizeMode="cover"
              />
            </View>
            <View className="w-40 mx-2">
              <Image
                source={require("./assets/shoe2.png")}
                className="w-full h-32 rounded-lg"
                resizeMode="cover"
              />
            </View>
            <View className="w-40 mx-2">
              <Image
                source={require("./assets/shoe3.png")}
                className="w-full h-32 rounded-lg"
                resizeMode="cover"
              />
            </View>
            <View className="w-40 mx-2">
              <Image
                source={require("./assets/shoe4.png")}
                className="w-full h-32 rounded-lg"
                resizeMode="cover"
              />
            </View>
          </ScrollView>
        </View>

        {/* Made For Miles Banner */}
        <View className="px-4 mt-6">
          <Image
            source={require("./assets/banner-shoe.png")}
            className="w-full h-40 rounded-lg"
            resizeMode="cover"
          />
          <View className="mt-4">
            <Text className="text-xl font-bold text-gray-900">
              Made For Miles
            </Text>
            <Text className="text-sm text-gray-500 mt-1">
              The perfect place to find your new{"\n"}favorite running shoes
            </Text>
          </View>
        </View>

        {/* The Latest And Greatest */}
        <View className="px-4 mt-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            The Latest And Greatest
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-2"
          >
            <ProductCard
              image={require("./assets/product1.png")}
              title="Tech Fleece"
              price="$110"
            />
            <ProductCard
              image={require("./assets/product2.png")}
              title="Indy Luxe"
              price="$36"
              originalPrice="$80"
            />
            <ProductCard
              image={require("./assets/product3.png")}
              title="Space"
              price="$130"
            />
          </ScrollView>
        </View>

        <View className="h-20" />
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
        <TouchableOpacity className="items-center">
          <HomeIcon active />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <SearchIcon />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <HeartIcon />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <UserIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

interface ProductCardProps {
  image: any;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
}) => {
  return (
    <TouchableOpacity className="w-32 mx-2">
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

export default App;
