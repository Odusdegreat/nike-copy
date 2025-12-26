import { usePathname, useRouter } from "expo-router";
import { Heart, Home, Search, User } from "lucide-react-native";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

type TabItem = {
  label: string;
  icon: any;
  route: string;
};

const TABS: TabItem[] = [
  { label: "Home", icon: Home, route: "/" },
  { label: "Search", icon: Search, route: "/search" },
  { label: "Saved", icon: Heart, route: "/favorites" },
  { label: "Profile", icon: User, route: "/profile" },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 10),
          width: width,
        },
      ]}
    >
      {TABS.map((tab) => {
        const active = pathname === tab.route;
        const Icon = tab.icon;

        return (
          <TouchableOpacity
            key={tab.route}
            onPress={() => router.push(tab.route as any)}
            style={styles.tab}
            activeOpacity={0.6}
          >
            <Icon
              size={22}
              color={active ? "#000" : "#999"}
              strokeWidth={active ? 2.5 : 2}
            />
            <Text
              style={[
                styles.label,
                {
                  color: active ? "#000" : "#999",
                  fontWeight: active ? "600" : "400",
                },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
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
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
  },
});
