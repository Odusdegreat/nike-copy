import { ShoppingBag } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeroCard from "../../components/HeroCard";
import Screen from "../../components/layout/Screen";
import ProductGrid from "../../components/ProductGrid";
import { PRODUCTS } from "../../constants/product";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.logo}>✓</Text>
        <TouchableOpacity style={styles.bagButton} activeOpacity={0.7}>
          <ShoppingBag size={24} color="#000" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <HeroCard />

      <ProductGrid title="The Latest And Greatest" products={PRODUCTS} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  bagButton: {
    padding: 8,
  },
});
