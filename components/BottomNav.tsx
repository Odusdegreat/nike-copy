import { Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const Tab = ({ route, icon }: { route: string; icon: any }) => (
    <TouchableOpacity
      onPress={() => router.push(route)}
      style={styles.tab}
      activeOpacity={0.7}
    >
      <Feather
        name={icon}
        size={22}
        color={isActive(route) ? "#000" : "#9CA3AF"}
      />

      {isActive(route) && <View style={styles.dot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Tab route="/(tabs)" icon="home" />
      <Tab route="/(tabs)/search" icon="search" />
      <Tab route="/(tabs)/favorites" icon="heart" />
      <Tab route="/(tabs)/profile" icon="user" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },

  tab: {
    alignItems: "center",
    gap: 6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#000",
  },
});
