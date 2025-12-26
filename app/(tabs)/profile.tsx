import {
  ChevronRight,
  CreditCard,
  LogOut,
  Package,
  Settings,
  User,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Screen from "../../components/layout/Screen";

export default function ProfileScreen() {
  const menuItems = [
    { icon: Package, label: "Orders", subtitle: "View your order history" },
    {
      icon: CreditCard,
      label: "Payment Methods",
      subtitle: "Manage payment options",
    },
    { icon: Settings, label: "Settings", subtitle: "App preferences" },
  ];

  return (
    <Screen>
      <View className="px-4 pb-6">
        <Text className="text-3xl font-bold mb-6">Profile</Text>

        {/* Profile Card */}
        <View className="items-center mb-8 bg-gray-50 rounded-2xl p-6">
          <View
            className="w-24 h-24 rounded-full bg-black items-center justify-center mb-4"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <User size={40} color="#fff" strokeWidth={2} />
          </View>
          <Text className="text-xl font-bold">Guest User</Text>
          <Text className="text-gray-600 mt-1">guest@example.com</Text>
        </View>

        {/* Menu Items */}
        <View
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center p-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
              activeOpacity={0.7}
            >
              <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center">
                <item.icon size={20} color="#000" />
              </View>
              <View className="flex-1 ml-4">
                <Text className="text-base font-semibold mb-0.5">
                  {item.label}
                </Text>
                <Text className="text-xs text-gray-500">{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center mt-6 bg-black rounded-full py-4 px-6"
          activeOpacity={0.8}
        >
          <LogOut size={20} color="#fff" />
          <Text className="text-white font-semibold ml-2 text-base">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
