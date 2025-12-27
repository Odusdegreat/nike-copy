import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={22} />
      <Feather name="search" size={22} />
      <Feather name="heart" size={22} />
      <Feather name="user" size={22} />
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
  },
});
