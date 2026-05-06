// src/navigation/BottomTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

// Main tabs
import HomeScreen from "../screens/Home/HomeScreen";
import ChatbotScreen from "../screens/Chatbot/ChatbotScreen";
import CropsScreen from "../screens/Crops/CropsScreen";
import MarketScreen from "../screens/Market/MarketScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // hide headers (Drawer handles global nav)
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { height: 60 }, // taller tab bar for emoji + label
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{
          tabBarLabel: "Chatbot",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🤖</Text>,
        }}
      />
      <Tab.Screen
        name="Crops"
        component={CropsScreen}
        options={{
          tabBarLabel: "Crops",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🌾</Text>,
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarLabel: "Market",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🛒</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
