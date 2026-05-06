// src/navigation/DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import BottomTabs from "./BottomTabs";

// Extras (drawer only)
import AdvisoryHistoryScreen from "../screens/Extras/AdvisoryHistoryScreen";
import NotificationsScreen from "../screens/Extras/NotificationsScreen";
import ReportsScreen from "../screens/Extras/ReportsScreen";
import SettingsScreen from "../screens/Extras/SettingsScreen";
import HelpScreen from "../screens/Extras/HelpScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        drawerLabelStyle: { fontSize: 18, fontWeight: "600", marginVertical: 8 },
        drawerActiveTintColor: "#2E7D32",
        drawerInactiveTintColor: "#555",
        drawerItemStyle: { paddingVertical: 6 },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabs}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },
          headerShown: true,
          headerTitleAlign: "left",
          headerTitle: () => <Text style={styles.titleText}>KisanMitra</Text>,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.hamburgerBtn}
              onPress={() => navigation.toggleDrawer()}
            >
              <View style={styles.line} />
              <View style={styles.line} />
              <View style={styles.line} />
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

      {/* Drawer extras */}
      <Drawer.Screen
        name="AdvisoryHistory"
        component={AdvisoryHistoryScreen}
        options={{ drawerLabel: "📋 Advisory History" }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ drawerLabel: "🔔 Notifications" }}
      />
      <Drawer.Screen
        name="Reports"
        component={ReportsScreen}
        options={{ drawerLabel: "📑 Reports" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: "⚙️ Settings" }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{ drawerLabel: "📞 Help" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "👤 Profile" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E7D32",
    marginLeft: 10,
  },
  hamburgerBtn: {
    marginLeft: 15,
    justifyContent: "space-around",
    height: 30, // bigger
    width: 35,  // bigger
  },
  line: {
    height: 4, // thicker
    backgroundColor: "#2E7D32",
    borderRadius: 2,
  },
  profileBtn: {
    marginRight: 15,
    borderRadius: 25,
    overflow: "hidden",
    width: 45,   // slightly bigger profile
    height: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
});
