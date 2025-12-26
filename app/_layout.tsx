import { Stack } from "expo-router";
import "../global.css"; // NativeWind styles

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
