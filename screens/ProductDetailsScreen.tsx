import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SIZES = ["XS", "S", "M", "L"];

export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [qty, setQty] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="heart" size={22} />
        </TouchableOpacity>
      </View>

      {/* PRODUCT IMAGE */}
      <Image
        source={require("../assets/nike-woman.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* BOTTOM CARD */}
      <View style={styles.card}>
        <View style={styles.dragIndicator} />

        <Text style={styles.title}>Nike Swoosh</Text>
        <Text style={styles.subtitle}>Women's Medium-Support</Text>

        {/* SIZE */}
        <Text style={styles.sectionTitle}>Select size</Text>
        <View style={styles.sizeRow}>
          {SIZES.map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.sizeActive,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* QTY + PRICE */}
        <View style={styles.qtyRow}>
          <View style={styles.qtyControl}>
            <TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}>
              <Feather name="minus" size={20} />
            </TouchableOpacity>

            <Text style={styles.qtyText}>{qty}</Text>

            <TouchableOpacity onPress={() => setQty(qty + 1)}>
              <Feather name="plus" size={20} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.priceLabel}>Total price</Text>
            <Text style={styles.price}>₦{(27000 * qty).toLocaleString()}</Text>
          </View>
        </View>

        {/* ADD TO BAG */}
        <TouchableOpacity style={styles.addBtn}>
          <Feather name="shopping-bag" size={18} color="#fff" />
          <Text style={styles.addText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginVertical: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ddd",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
  },
  sizeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  sizeBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sizeActive: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  sizeTextActive: {
    color: "#fff",
  },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 20,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    minWidth: 20,
    textAlign: "center",
  },
  priceLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  addText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
