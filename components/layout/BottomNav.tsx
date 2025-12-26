import { usePathname, useRouter } from "expo-router";
import { Heart, Home, Search, User } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      className="absolute bottom-0 left-0 right-0 flex-row bg-white border-t border-gray-200"
      style={{
        paddingBottom: insets.bottom,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10,
      }}
    >
      {TABS.map((tab) => {
        const active = pathname === tab.route;
        const Icon = tab.icon;

        return (
          <TouchableOpacity
            key={tab.route}
            onPress={() => router.push(tab.route as any)}
            className="flex-1 items-center justify-center py-2"
            activeOpacity={0.6}
          >
            <Icon
              size={24}
              color={active ? "#000" : "#999"}
              strokeWidth={active ? 2.5 : 2}
            />
            <Text
              className={`text-xs mt-1 ${
                active ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
