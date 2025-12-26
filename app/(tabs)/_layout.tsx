import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import BottomNav from "../../components/layout/BottomNav";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
