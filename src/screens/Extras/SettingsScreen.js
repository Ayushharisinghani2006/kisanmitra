// src/screens/Extras/SettingsScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleTheme = () => setDarkThemeEnabled(!darkThemeEnabled);

  const handleClearCache = () => Alert.alert("Cache Cleared", "App cache has been cleared.");
  const handleContactSupport = () => Alert.alert("Contact Support", "Email us at support@kisanmitra.com");
  const handleRateUs = () => Alert.alert("Rate Us", "Redirect to app store for rating.");
  const handleLogout = () => Alert.alert("Logout", "Are you sure you want to log out?", [
    { text: "Cancel", style: "cancel" },
    { text: "Logout", style: "destructive" },
  ]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.itemText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.itemText}>Change Password</Text>
      </TouchableOpacity>

      {/* App Preferences */}
      <Text style={styles.sectionTitle}>App Preferences</Text>
      <View style={styles.item}>
        <Text style={styles.itemText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Dark Theme</Text>
        <Switch value={darkThemeEnabled} onValueChange={toggleTheme} />
      </View>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Language Selection", "Choose your language")}>
        <Text style={styles.itemText}>Language</Text>
      </TouchableOpacity>

      {/* Security & Privacy */}
      <Text style={styles.sectionTitle}>Security & Privacy</Text>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Biometric Login", "Enable Fingerprint / Face ID")}>
        <Text style={styles.itemText}>Biometric Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Privacy Policy", "View privacy policy")}>
        <Text style={styles.itemText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleClearCache}>
        <Text style={styles.itemText}>Clear Cache</Text>
      </TouchableOpacity>

      {/* Support */}
      <Text style={styles.sectionTitle}>Support</Text>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Help")}>
        <Text style={styles.itemText}>Help & FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleContactSupport}>
        <Text style={styles.itemText}>Contact Support</Text>
      </TouchableOpacity>

      {/* About */}
      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.item}>
        <Text style={styles.itemText}>App Version</Text>
        <Text style={styles.itemText}>1.0.0</Text>
      </View>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Terms & Conditions", "View T&C")}>
        <Text style={styles.itemText}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleRateUs}>
        <Text style={styles.itemText}>Rate Us</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={[styles.item, styles.logout]} onPress={handleLogout}>
        <Text style={[styles.itemText, { color: "red" }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2", padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#2E7D32" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: { fontSize: 16, color: "#333" },
  logout: { backgroundColor: "#fff", justifyContent: "center" },
});
