import { Heart, Home, Search, User } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/theme";

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <Home size={22} />
      <Search size={22} />
      <Heart size={22} />
      <User size={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: Colors.border,
  },
});
