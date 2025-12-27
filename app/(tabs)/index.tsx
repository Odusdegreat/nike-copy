import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner />

          <Text style={styles.sectionTitle}>The Latest And Greatest</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productRow}
          >
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF" },
  container: { flex: 1 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  productRow: {
    paddingHorizontal: 16,
  },
});
