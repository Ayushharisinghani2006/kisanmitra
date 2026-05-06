// src/navigation/MainStackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import BottomTabs from "./BottomTabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      {/* BottomTabs screen with header */}
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={({ navigation }) => ({
          headerTitleAlign: "left",
          headerTitle: () => <Text style={styles.titleText}>KisanMitra</Text>,

          // Hamburger icon using Ionicons
          headerLeft: () => (
            <TouchableOpacity
              style={styles.menuBtn}
              onPress={() => navigation.getParent().toggleDrawer()}
            >
              <Ionicons name="menu" size={30} color="#2E7D32" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              style={styles.profileBtn}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={require("../screens/assets/image.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          ),
        })}
      />

      {/* Profile Screen */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E7D32",
  },
  profileBtn: {
    marginRight: 15,
    borderRadius: 25,
    overflow: "hidden",
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuBtn: {
    marginLeft: 15,
    padding: 5,
  },
});
