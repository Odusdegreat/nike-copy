import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}></Text>

          <TouchableOpacity onPress={() => router.push("/settings")}>
            <Feather name="settings" size={22} />
          </TouchableOpacity>
        </View>

        {/* USER CARD */}
        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/odusprofessional.jpg")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Odus</Text>
            <Text style={styles.email}>odus@nike.com</Text>

            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* MEMBER STATUS */}
        <TouchableOpacity style={styles.memberCard}>
          <Feather name="award" size={22} color="#fff" />

          <View style={{ flex: 1 }}>
            <Text style={styles.memberTitle}>Nike Member</Text>
            <Text style={styles.memberSub}>
              You’re getting the best of Nike.
            </Text>
          </View>

          <Feather name="chevron-right" size={22} color="#fff" />
        </TouchableOpacity>

        {/* QUICK ACTIONS */}
        <View style={styles.section}>
          <ProfileItem icon="shopping-bag" label="Orders" />
          <ProfileItem icon="heart" label="Favorites" />
          <ProfileItem icon="truck" label="Delivery Address" />
          <ProfileItem icon="credit-card" label="Payment Methods" />
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <ProfileItem icon="user" label="Personal Information" />
          <ProfileItem icon="lock" label="Security" />
          <ProfileItem icon="bell" label="Notifications" />
        </View>

        {/* SUPPORT */}
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.section}>
          <ProfileItem icon="help-circle" label="Help Center" />
          <ProfileItem icon="info" label="About Nike" />
        </View>

        {/* LOG OUT */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileItem({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.row}>
      <Feather name={icon} size={20} />
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  profileCard: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
  },

  email: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  editBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  editText: {
    fontSize: 13,
    fontWeight: "600",
  },

  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#000",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 16,
    marginBottom: 30,
  },

  memberTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  memberSub: {
    color: "#D1D5DB",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    paddingHorizontal: 20,
    marginBottom: 8,
  },

  section: {
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#F3F4F6",
    gap: 14,
  },

  rowText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },

  logoutBtn: {
    marginHorizontal: 20,
    marginBottom: 40,
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
