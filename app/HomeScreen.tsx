import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";

import { products } from "../data/products";
import { Colors } from "../constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroCard />

        <Text style={styles.sectionTitle}>The Latest And Greatest</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.products}
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  products: {
    paddingLeft: 16,
  },
});
