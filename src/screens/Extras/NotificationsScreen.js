// src/screens/Extras/NotificationsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Sample notification data
const initialNotifications = [
  {
    id: "1",
    type: "price",
    title: "Wheat Price Alert",
    message: "Wheat price increased to ₹2,100 / Quintal",
    time: "9:30 AM, Today",
    read: false,
  },
  {
    id: "2",
    type: "pest",
    title: "Pest Alert",
    message: "Local area reports pest attack in Maize crop",
    time: "4:00 PM, Yesterday",
    read: false,
  },
  {
    id: "3",
    type: "reminder",
    title: "Irrigation Reminder",
    message: "Time to irrigate your crops",
    time: "6:00 PM, Yesterday",
    read: true,
  },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [search, setSearch] = useState("");

  // Filter notifications by search
  const filteredNotifications = notifications.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase())
  );

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const renderItem = ({ item }) => {
    const icon =
      item.type === "price"
        ? "📈"
        : item.type === "pest"
        ? "🦠"
        : "⏰";

    return (
      <TouchableOpacity
        style={[styles.notificationCard, item.read ? styles.read : styles.unread]}
        onPress={() => markAsRead(item.id)}
      >
        <Text style={styles.icon}>{icon}</Text>
        <View style={styles.textContainer}>
          <Text style={[styles.title, item.read && styles.readText]}>
            {item.title}
          </Text>
          <Text style={[styles.message, item.read && styles.readText]}>
            {item.message}
          </Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search + Mark All */}
      <View style={styles.topBar}>
        <TextInput
          placeholder="🔍 Search notifications..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.markAllBtn} onPress={markAllAsRead}>
          <Text style={styles.markAllText}>Mark all read</Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      {filteredNotifications.length > 0 ? (
        <FlatList
          data={filteredNotifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>🎉 You’re all caught up! No new notifications.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2", padding: 15 },
  topBar: { flexDirection: "row", marginBottom: 15, alignItems: "center" },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
  },
  markAllBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  markAllText: { color: "#fff", fontWeight: "600" },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  icon: { fontSize: 28, marginRight: 12 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 3 },
  message: { fontSize: 14, color: "#555" },
  time: { fontSize: 12, color: "#888", marginTop: 4 },
  unread: { backgroundColor: "#E8F5E9" },
  read: { backgroundColor: "#fff" },
  readText: { color: "#999" },
  emptyState: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#777", textAlign: "center" },
});
