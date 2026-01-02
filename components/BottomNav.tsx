import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  // Better route matching that handles both "/" and "/(tabs)"
  const isActive = (route: string) => {
    if (route === "/" && (pathname === "/" || pathname === "/(tabs)")) {
      return true;
    }
    return pathname.includes(route) && route !== "/";
  };

  const Tab = ({
    route,
    activeIcon,
    inactiveIcon,
  }: {
    route: string;
    activeIcon: any;
    inactiveIcon: any;
  }) => {
    const active = isActive(route);

    return (
      <TouchableOpacity
        onPress={() => router.push(route as any)}
        style={styles.tab}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name={active ? activeIcon : inactiveIcon}
            size={26}
            color={active ? "#000" : "#9CA3AF"}
          />
          {active && <View style={styles.activeDot} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 10) }]}
    >
      <Tab route="/" activeIcon="home" inactiveIcon="home-outline" />
      <Tab route="/search" activeIcon="search" inactiveIcon="search-outline" />
      <Tab route="/favorites" activeIcon="heart" inactiveIcon="heart-outline" />
      <Tab route="/profile" activeIcon="person" inactiveIcon="person-outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    zIndex: 100, // Added to ensure it stays on top
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40, // Added to prevent layout shift
  },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#000",
    marginTop: 4,
    position: "absolute",
    bottom: -8,
  },
});
