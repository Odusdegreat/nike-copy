import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/nike-logo.png")}
        style={styles.logo}
      />
      <Feather name="shopping-bag" size={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 16,
    resizeMode: "contain",
  },
});
