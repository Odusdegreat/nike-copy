import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Feather
          name="home"
          size={22}
          color={isActive("/(tabs)") ? "#000" : "#9CA3AF"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/search")}>
        <Feather
          name="search"
          size={22}
          color={isActive("/(tabs)/search") ? "#000" : "#9CA3AF"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/favorites")}>
        <Feather
          name="heart"
          size={22}
          color={isActive("/(tabs)/favorites") ? "#000" : "#9CA3AF"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
        <Feather
          name="user"
          size={22}
          color={isActive("/(tabs)/profile") ? "#000" : "#9CA3AF"}
        />
      </TouchableOpacity>
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
});
