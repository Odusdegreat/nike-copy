import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import { UserIcon } from "../../components/Icons";

const ProfileScreen = () => {
  const menuItems = [
    "Orders",
    "Settings",
    "Help & Support",
    "About",
    "Log Out",
  ];

  const handleMenuPress = (item: string) => {
    console.log(`${item} pressed`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="flex-1 px-4 mt-6">
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-gray-200 rounded-full justify-center items-center mb-3">
            <UserIcon size={40} color="#666" />
          </View>
          <Text className="text-xl font-bold text-gray-900">John Doe</Text>
          <Text className="text-sm text-gray-500">john.doe@email.com</Text>
        </View>

        <View className="border-t border-gray-200">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="py-4 border-b border-gray-100"
              onPress={() => handleMenuPress(item)}
            >
              <Text className="text-base text-gray-900">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

export default ProfileScreen;
