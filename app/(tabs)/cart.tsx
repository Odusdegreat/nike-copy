import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.center}>
        <Feather name="shopping-bag" size={56} color="#9CA3AF" />

        <Text style={styles.title}>Your bag is empty</Text>
        <Text style={styles.subtitle}>
          Once you add something, it will appear here.
        </Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 6,
  },
});
