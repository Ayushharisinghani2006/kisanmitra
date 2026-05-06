// src/screens/ProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  const [farmer, setFarmer] = useState({
    name: "Ayush Kumar",
    phone: "+91 99999 99999",
    email: "ayush@example.com",
    location: "Jaipur, Rajasthan",
    cropsManaged: 5,
    advisoryRequests: 20,
    favorites: 3,
    joined: "2024",
  });

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: () => console.log("Logged out") },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/logo.png")} // Replace with actual profile image
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={{ fontSize: 16 }}>✏️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{farmer.name}</Text>
        <Text style={styles.role}>🌾 Farmer</Text>
      </View>

      {/* Stats Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsScroll}>
        <View style={styles.statCard}><Text style={styles.statNumber}>{farmer.cropsManaged}</Text><Text>Crops</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{farmer.advisoryRequests}</Text><Text>Advisory</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{farmer.favorites}</Text><Text>Favorites</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{farmer.joined}</Text><Text>Joined</Text></View>
      </ScrollView>

      {/* Personal Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <View style={styles.detailRow}><Text style={styles.detailLabel}>👤 Name:</Text><Text>{farmer.name}</Text></View>
        <View style={styles.detailRow}><Text style={styles.detailLabel}>📞 Phone:</Text><Text>{farmer.phone}</Text></View>
        <View style={styles.detailRow}><Text style={styles.detailLabel}>📧 Email:</Text><Text>{farmer.email}</Text></View>
        <View style={styles.detailRow}><Text style={styles.detailLabel}>📍 Location:</Text><Text>{farmer.location}</Text></View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("CropGuideScreen")}>
          <Text style={styles.actionText}>🌱 My Crops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("MarketScreen")}>
          <Text style={styles.actionText}>📈 Market Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("AdvisoryHistory")}>
          <Text style={styles.actionText}>📋 Advisory History</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2" },
  header: { alignItems: "center", marginVertical: 20 },
  profileImageContainer: { position: "relative" },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  name: { fontSize: 22, fontWeight: "700", marginTop: 10, color: "#2E7D32" },
  role: { fontSize: 16, color: "#555", marginTop: 3 },
  statsScroll: { marginVertical: 20, paddingLeft: 15 },
  statCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginRight: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minWidth: 100,
  },
  statNumber: { fontSize: 18, fontWeight: "700", color: "#2E7D32", marginBottom: 5 },
  section: { paddingHorizontal: 15, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: "#4CAF50" },
  detailRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8 },
  detailLabel: { fontWeight: "600", color: "#2E7D32" },
  actionButton: {
    backgroundColor: "#A5D6A7",
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
  },
  actionText: { fontSize: 16, color: "#2E7D32", fontWeight: "600" },
  logoutBtn: {
    backgroundColor: "#EF5350",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
