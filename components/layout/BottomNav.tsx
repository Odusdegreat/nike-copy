import { Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Feather
          name="home"
          size={24}
          color={isActive("/(tabs)") ? "#000" : "#999"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/search")}>
        <Feather
          name="search"
          size={24}
          color={isActive("/(tabs)/search") ? "#000" : "#999"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/favorites")}>
        <Feather
          name="heart"
          size={24}
          color={isActive("/(tabs)/favorites") ? "#000" : "#999"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
        <Feather
          name="user"
          size={24}
          color={isActive("/(tabs)/profile") ? "#000" : "#999"}
        />
      </TouchableOpacity>
    </View>
  );
}
