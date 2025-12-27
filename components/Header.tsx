import { StyleSheet, View } from "react-native";
import { ShoppingBag } from "lucide-react-native";
import { Colors } from "../constants/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <ShoppingBag size={22} color={Colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.black,
  },
});
