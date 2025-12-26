import { Search as SearchIcon, X } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../../components/layout/Screen";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../constants/product";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === "") {
      setFilteredProducts(PRODUCTS);
    } else {
      const filtered = PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Screen scroll={false}>
      <View className="flex-1">
        <View className="px-4 pb-4">
          <Text className="text-3xl font-bold mb-4">Search</Text>

          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
            <SearchIcon size={20} color="#999" />
            <TextInput
              value={searchText}
              onChangeText={handleSearch}
              placeholder="Search for products..."
              className="flex-1 ml-3 text-base"
              placeholderTextColor="#999"
              autoCapitalize="none"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => handleSearch("")}>
                <X size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <View className="items-center justify-center py-12">
              <SearchIcon size={48} color="#ccc" />
              <Text className="text-gray-500 text-lg mt-4">
                No products found
              </Text>
            </View>
          }
        />
      </View>
    </Screen>
  );
}
