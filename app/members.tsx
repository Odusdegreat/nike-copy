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
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/search")}
          style={styles.backBtn}
        >
          <Feather name="chevron-left" size={26} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nike Member Shop</Text>

        {/* Spacer for symmetry */}
        <View style={{ width: 26 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Members-Only Access</Text>
          <Text style={styles.heroSub}>
            Unlock exclusive styles, drops, and experiences.
          </Text>
        </View>

        {/* BENEFITS */}
        <Text style={styles.sectionTitle}>Member Benefits</Text>

        <View style={styles.benefitsWrapper}>
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
  /* ROOT */
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  backBtn: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  /* HERO */
  hero: {
    backgroundColor: "#000",
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 22,
    marginTop: 24,
    marginBottom: 32,
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
    lineHeight: 20,
  },

  /* BENEFITS */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },

  benefitsWrapper: {
    gap: 12,
  },

  benefitCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 18,
    backgroundColor: "#F9FAFB",
  },

  benefitText: {
    fontSize: 15,
    fontWeight: "500",
  },

  /* CTA */
  joinBtn: {
    backgroundColor: "#000",
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  joinText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
