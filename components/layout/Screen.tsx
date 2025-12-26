import { ReactNode } from "react";
import { ScrollView, StatusBar, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
}

export default function Screen({
  children,
  scroll = true,
  style,
}: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar barStyle="dark-content" />
      {scroll ? (
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          style={style}
        >
          {children}
        </ScrollView>
      ) : (
        <View className="flex-1" style={style}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
