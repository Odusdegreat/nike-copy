import { Slot } from "expo-router";
import { View } from "react-native";
import BottomNav from "../../components/layout/BottomNav";

export default function TabsLayout() {
  return (
    <View className="flex-1 bg-white">
      <Slot />
      <BottomNav />
    </View>
  );
}
