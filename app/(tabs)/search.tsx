import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TRENDING = ["Air Force 1", "Nike Dunk", "Tech Fleece", "Pegasus"];

const CATEGORIES = [
  "Shoes",
  "Clothing",
  "New Releases",
  "Best Sellers",
  "Sale",
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#6B7280" />
        <TextInput
          placeholder="Search Nike"
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Feather name="x" size={18} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* TRENDING */}
        {query.length === 0 && (
          <>
            <Text style={styles.sectionTitle}>Trending Searches</Text>

            {TRENDING.map((item) => (
              <TouchableOpacity key={item} style={styles.trendingRow}>
                <Feather name="trending-up" size={16} color="#6B7280" />
                <Text style={styles.trendingText}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* CATEGORIES */}
            <Text style={styles.sectionTitle}>Shop by Category</Text>

            <View style={styles.categoryWrap}>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity key={cat} style={styles.categoryPill}>
                  <Text style={styles.categoryText}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* EDITORIAL */}
            <Text style={styles.sectionTitle}>Discover</Text>

            <View style={styles.editorialCard}>
              <Text style={styles.editorialTitle}>New & Featured</Text>
              <Text style={styles.editorialSub}>
                The latest drops, made for movement.
              </Text>
            </View>

            <View style={styles.editorialCardAlt}>
              <Text style={styles.editorialTitle}>Member Shop</Text>
              <Text style={styles.editorialSub}>
                Exclusive styles for Nike Members.
              </Text>
            </View>
          </>
        )}

        {/* SEARCH RESULT STATE */}
        {query.length > 0 && (
          <View style={styles.results}>
            <Text style={styles.resultsText}>
              Showing results for “{query}”
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 28,
    marginBottom: 12,
  },

  trendingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#F3F4F6",
  },

  trendingText: {
    fontSize: 15,
  },

  categoryWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  categoryPill: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  categoryText: {
    fontWeight: "500",
    fontSize: 14,
  },

  editorialCard: {
    backgroundColor: "#000",
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
  },

  editorialCardAlt: {
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    padding: 20,
  },

  editorialTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  editorialSub: {
    color: "#D1D5DB",
    fontSize: 14,
  },

  results: {
    marginTop: 30,
  },

  resultsText: {
    color: "#6B7280",
    fontSize: 15,
  },
});
