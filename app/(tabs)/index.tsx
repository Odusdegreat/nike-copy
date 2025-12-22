import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "../../components/Header";
import LatestProducts from "../../components/LatestProducts";
import MadeForMilesBanner from "../../components/MadeForMilesBanner";
import ShoeGallery from "../../components/ShoeGallery";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ShoeGallery />
        <MadeForMilesBanner />
        <LatestProducts />
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
