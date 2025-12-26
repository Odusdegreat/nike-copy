import { CreditCard, Package, Settings, User } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Screen from "../../components/layout/Screen";

export default function ProfileScreen() {
  const menuItems = [
    { icon: Package, label: "Orders", color: "#000" },
    { icon: CreditCard, label: "Payment Methods", color: "#000" },
    { icon: Settings, label: "Settings", color: "#000" },
  ];

  return (
    <Screen>
      <View className="px-4 pt-12">
        <Text className="text-2xl font-bold mb-6">Profile</Text>

        <View className="items-center mb-8">
          <View className="w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-3">
            <User size={48} color="#666" />
          </View>
          <Text className="text-xl font-bold">Guest User</Text>
          <Text className="text-gray-600">guest@example.com</Text>
        </View>

        <View className="bg-white rounded-xl overflow-hidden">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center p-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <item.icon size={24} color={item.color} />
              <Text className="flex-1 ml-4 text-base font-medium">
                {item.label}
              </Text>
              <Text className="text-gray-400">›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Screen>
  );
}
