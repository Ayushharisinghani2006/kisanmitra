import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const advisoryHistory = [
  {
    id: "1",
    crop: "Wheat 🌾",
    date: "2025-09-18",
    time: "10:30 AM",
    status: "Completed",
    adviser: "Dr. Sharma",
    summary: "Recommended organic fertilizer for better yield",
  },
  {
    id: "2",
    crop: "Rice 🌱",
    date: "2025-09-16",
    time: "2:00 PM",
    status: "Pending",
    adviser: null,
    summary: "",
  },
  {
    id: "3",
    crop: "Maize 🌽",
    date: "2025-09-14",
    time: "11:15 AM",
    status: "Rejected",
    adviser: "Dr. Verma",
    summary: "Crop disease detected, use recommended pesticide",
  },
];

export default function AdvisoryHistoryScreen({ navigation, onClose }) {
  const [search, setSearch] = useState("");

  const filteredHistory = advisoryHistory.filter((item) =>
    item.crop.toLowerCase().includes(search.toLowerCase())
  );

  const renderStatus = (status) => {
    let color = "#888"; // default gray
    if (status === "Completed") color = "#2E7D32";
    else if (status === "Pending") color = "#FF9800";
    else if (status === "Rejected") color = "#D32F2F";
    return (
      <Text style={[styles.statusBadge, { backgroundColor: color }]}>
        {status}
      </Text>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.crop}>{item.crop}</Text>
        {renderStatus(item.status)}
      </View>
      <Text style={styles.date}>
        🕒 {item.date} at {item.time}
      </Text>
      {item.adviser && <Text style={styles.adviser}>Adviser: {item.adviser}</Text>}
      {item.summary ? <Text style={styles.summary}>{item.summary}</Text> : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        placeholder="🔍 Search crop..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />

      {/* Advisory List */}
      {filteredHistory.length > 0 ? (
        <FlatList
          data={filteredHistory}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You haven't requested any advisory yet 🌱</Text>
        </View>
      )}

      {/* Request New Advisory */}
      <TouchableOpacity
        style={styles.requestBtn}
        onPress={() => {
          // Navigate to ChatbotScreen for new advisory
          onClose?.(); // Close modal if using modal
          navigation?.navigate("Chatbot"); // React Navigation stack
        }}
      >
        <Text style={styles.requestText}>➕ Request New Advisory</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2", padding: 15 },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  crop: { fontSize: 18, fontWeight: "700" },
  statusBadge: { color: "#fff", fontWeight: "600", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  date: { fontSize: 14, marginTop: 6, color: "#555" },
  adviser: { fontSize: 14, marginTop: 4, color: "#333" },
  summary: { fontSize: 14, marginTop: 6, color: "#666" },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 },
  emptyText: { fontSize: 16, color: "#888", textAlign: "center" },
  requestBtn: {
    backgroundColor: "#2E7D32",
    paddingVertical: 14,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  requestText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
