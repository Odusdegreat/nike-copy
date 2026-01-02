import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  const { liked, name, category, price } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {liked === "true" ? (
        <View style={styles.card}>
          <Image
            source={require("../../assets/nike-woman.png")}
            style={styles.image}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No favorites yet</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 16,
  },

  card: {
    marginTop: 20,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
  },

  name: { marginTop: 10, fontWeight: "600" },
  category: { color: "#6B7280", marginTop: 2 },
  price: { marginTop: 4, fontWeight: "600" },

  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    color: "#9CA3AF",
  },
});
