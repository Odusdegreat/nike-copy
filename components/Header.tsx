import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeIcon, SearchIcon, HeartIcon, UserIcon } from "./Icons";
import { TabNavigationProp } from "../types/navigation";

const BottomNav = () => {
  const navigation = useNavigation<TabNavigationProp>();
  const route = useRoute();

  const isActive = (routeName: string) => route.name === routeName;

  return (
    <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate("Home")}
      >
        <HomeIcon active={isActive("Home")} size={24} />
        {isActive("Home") && (
          <View className="w-1 h-1 bg-black rounded-full mt-1" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate("Search")}
      >
        <SearchIcon color={isActive("Search") ? "#000" : "#666"} size={24} />
        {isActive("Search") && (
          <View className="w-1 h-1 bg-black rounded-full mt-1" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate("Favorites")}
      >
        <HeartIcon color={isActive("Favorites") ? "#000" : "#666"} size={24} />
        {isActive("Favorites") && (
          <View className="w-1 h-1 bg-black rounded-full mt-1" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate("Profile")}
      >
        <UserIcon color={isActive("Profile") ? "#000" : "#666"} size={24} />
        {isActive("Profile") && (
          <View className="w-1 h-1 bg-black rounded-full mt-1" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
