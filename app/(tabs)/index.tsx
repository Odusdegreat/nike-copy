// app/tabs/index.tsx
import Navigation from "@/components/Navigation"; // Import the Navigation component
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Explore from "./explore"; // Import the Explore screen or other tabs

const Tab = createBottomTabNavigator();

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      {/* Navigation bar */}
      <Navigation />

      {/* Tab Navigation */}
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={Explore} />
        {/* Add more tabs/screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;
