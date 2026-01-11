import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBack}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 22 }} />
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <Item label="Personal Information" />
          <Item label="Security" />
          <Item label="Privacy" />
        </View>

        {/* PREFERENCES */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.section}>
          <Item label="Notifications" />
          <Item label="Language" />
          <Item label="Country / Region" />
        </View>

        {/* MEMBERSHIP */}
        <Text style={styles.sectionTitle}>Membership</Text>
        <View style={styles.section}>
          <Item label="Nike Membership" />
          <Item label="Passes" />
        </View>

        {/* APP */}
        <Text style={styles.sectionTitle}>App</Text>
        <View style={styles.section}>
          <Item label="About Nike" />
          <Item label="Terms of Use" />
          <Item label="Privacy Policy" />
        </View>

        {/* LOG OUT */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Item({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <Text style={styles.rowText}>{label}</Text>
      <Feather name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
  },

  section: {
    backgroundColor: "#fff",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#F3F4F6",
  },

  rowText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },

  logoutBtn: {
    margin: 20,
    marginTop: 30,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  logoutText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#EF4444",
  },
});
