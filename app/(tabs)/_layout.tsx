import { Slot, usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";
import BottomNav from "../../components/BottomNav";

export default function TabsLayout() {
  const pathname = usePathname();

  const hideBottomNav = pathname.includes("/cart");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>

      {!hideBottomNav && <BottomNav />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
