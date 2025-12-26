import { Search as SearchIcon, X } from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../../components/layout/Screen";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../constants/product";

const { width } = Dimensions.get("window");

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>

          <View style={styles.searchContainer}>
            <SearchIcon size={18} color="#999" />
            <TextInput
              value={searchText}
              onChangeText={handleSearch}
              placeholder="Search for products..."
              style={styles.input}
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => handleSearch("")}>
                <X size={18} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <SearchIcon size={48} color="#ccc" strokeWidth={1.5} />
              <Text style={styles.emptyText}>No products found</Text>
            </View>
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#000",
  },
  listContent: {
    paddingBottom: 120,
    paddingTop: 10,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    color: "#999",
    fontSize: 16,
    marginTop: 16,
  },
});
