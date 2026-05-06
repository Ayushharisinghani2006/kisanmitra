// src/screens/ReportsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Sample report data
const reportData = [
  {
    id: "1",
    crop: "Wheat 🌾",
    title: "Wheat Yield Report - March 2025",
    date: "2025-03-30",
    status: "Completed",
  },
  {
    id: "2",
    crop: "Rice 🌱",
    title: "Rice Pesticide Usage - March 2025",
    date: "2025-03-28",
    status: "In Progress",
  },
  {
    id: "3",
    crop: "Maize 🌽",
    title: "Maize Revenue Report - March 2025",
    date: "2025-03-25",
    status: "Pending",
  },
];

export default function ReportsScreen() {
  const [reports, setReports] = useState(reportData);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.crop}>{item.crop}</Text>
      <Text style={styles.reportTitle}>{item.title}</Text>
      <Text style={styles.date}>🗓 {item.date}</Text>
      <Text
        style={[
          styles.status,
          {
            color:
              item.status === "Completed"
                ? "green"
                : item.status === "Pending"
                ? "orange"
                : "blue",
          },
        ]}
      >
        Status: {item.status}
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Summary Cards */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>12</Text>
          <Text style={styles.summaryText}>Total Reports</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>₹25,000</Text>
          <Text style={styles.summaryText}>Revenue</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>8</Text>
          <Text style={styles.summaryText}>Completed</Text>
        </View>
      </View>

      {/* Report List */}
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#FAF8F2" },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  summaryNumber: { fontSize: 18, fontWeight: "700", color: "#2E7D32" },
  summaryText: { fontSize: 14, color: "#555", marginTop: 4, textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  crop: { fontSize: 16, fontWeight: "700", marginBottom: 5 },
  reportTitle: { fontSize: 15, marginBottom: 5, color: "#333" },
  date: { fontSize: 13, color: "#777", marginBottom: 5 },
  status: { fontSize: 14, fontWeight: "600", marginBottom: 10 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  viewButton: {
    backgroundColor: "#A5D6A7",
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },
  downloadButton: {
    backgroundColor: "#81C784",
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
