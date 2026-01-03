import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
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
        {/* DEFAULT STATE */}
        {query.length === 0 && (
          <>
            {/* TRENDING */}
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

            {/* DISCOVER */}
            <Text style={styles.sectionTitle}>Discover</Text>

            {/* NEW & FEATURED */}
            <View style={styles.editorialCardDark}>
              <Text style={styles.editorialTitleDark}>New & Featured</Text>
              <Text style={styles.editorialSubDark}>
                The latest drops, made for movement.
              </Text>
            </View>

            {/* MEMBER SHOP (NAVIGATES) */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push("/members")}
              style={styles.editorialCardLight}
            >
              <Text style={styles.editorialTitleLight}>Member Shop</Text>
              <Text style={styles.editorialSubLight}>
                Exclusive styles for Nike Members.
              </Text>
            </TouchableOpacity>
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

/* ================= STYLES ================= */

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

  /* DISCOVER CARDS */
  editorialCardDark: {
    backgroundColor: "#000",
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
  },

  editorialTitleDark: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  editorialSubDark: {
    color: "#D1D5DB",
    fontSize: 14,
  },

  editorialCardLight: {
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    padding: 20,
  },

  editorialTitleLight: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  editorialSubLight: {
    color: "#4B5563",
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
