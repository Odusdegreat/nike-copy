import { Heart } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/layout/Screen";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../constants/product";

export default function FavoritesScreen() {
  const favoriteProducts = PRODUCTS.slice(0, 2);

  return (
    <Screen scroll={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
        </View>

        {favoriteProducts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Heart size={64} color="#ddd" strokeWidth={1.5} />
            <Text style={styles.emptyTitle}>No Favorites Yet</Text>
            <Text style={styles.emptySubtitle}>
              Save your favorite items by tapping{"\n"}the heart icon
            </Text>
          </View>
        ) : (
          <FlatList
            data={favoriteProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
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
    color: "#000",
  },
  listContent: {
    paddingBottom: 120,
    paddingTop: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "#000",
  },
  emptySubtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});
