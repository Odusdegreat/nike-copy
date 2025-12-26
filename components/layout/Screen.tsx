import { ReactNode } from "react";
import { ScrollView, View, ViewStyle } from "react-native";

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
  if (scroll) {
    return (
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        style={style}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View className="flex-1 bg-white" style={style}>
      {children}
    </View>
  );
}
