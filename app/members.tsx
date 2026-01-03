import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MemberShopScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={26} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nike Member Shop</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Members-Only Access</Text>
          <Text style={styles.heroSub}>
            Unlock exclusive styles, drops, and experiences.
          </Text>
        </View>

        {/* BENEFITS */}
        <Text style={styles.sectionTitle}>Member Benefits</Text>

        <View style={styles.benefitCard}>
          <Feather name="star" size={22} />
          <Text style={styles.benefitText}>Exclusive Products</Text>
        </View>

        <View style={styles.benefitCard}>
          <Feather name="truck" size={22} />
          <Text style={styles.benefitText}>Free Delivery & Returns</Text>
        </View>

        <View style={styles.benefitCard}>
          <Feather name="zap" size={22} />
          <Text style={styles.benefitText}>Early Access to Drops</Text>
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.joinBtn}>
          <Text style={styles.joinText}>Join Nike Membership</Text>
        </TouchableOpacity>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  hero: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 24,
    marginVertical: 20,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },

  heroSub: {
    color: "#D1D5DB",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
  },

  benefitCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    marginBottom: 12,
  },

  benefitText: {
    fontSize: 15,
    fontWeight: "500",
  },

  joinBtn: {
    backgroundColor: "#000",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  joinText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
