// components/BottomNav.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNav: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-around items-center py-4 border-t bg-black">
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="flex items-center justify-center"
      >
        <Ionicons name="home" size={24} color="white" />
        <Text className="text-sm text-white">Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        className="flex items-center justify-center"
      >
        <Ionicons name="search" size={24} color="white" />
        <Text className="text-sm text-white">Search</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className="flex items-center justify-center"
      >
        <Ionicons name="cart" size={24} color="white" />
        <Text className="text-sm text-white">Cart</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className="flex items-center justify-center"
      >
        <Ionicons name="person" size={24} color="white" />
        <Text className="text-sm text-white">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
