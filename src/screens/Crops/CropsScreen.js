import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

const categories = [
  { id: "1", title: "Crop Guide", icon: "🌱", screen: "CropGuideScreen" },
  { id: "2", title: "Pest & Disease", icon: "🦠", screen: "PestScreen" },
  { id: "3", title: "Irrigation", icon: "💧", screen: "IrrigationScreen" },
  { id: "4", title: "Market & Pricing", icon: "🌾", screen: "MarketScreen" },
  { id: "5", title: "Seasonal Calendar", icon: "📅", screen: "CalendarScreen" },
  { id: "6", title: "Farming Tips", icon: "🧑‍🌾", screen: "TipsScreen" },
  { id: "7", title: "Weather", icon: "🌍", screen: "WeatherScreen" },
  { id: "8", title: "Knowledge Base", icon: "📖", screen: "KnowledgeScreen" },
];

export default function CropAdvisoryTab({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 🔝 Header Section */}
      <View style={styles.header}>
        <Text
          style={styles.title}
          numberOfLines={1} // Keep title in a single line
          ellipsizeMode="tail"
        >
          🌿 Crop Advisory
        </Text>
      </View>

      {/* 🔍 Search Bar + Language Toggle */}
      <View style={styles.searchRow}>
        <TextInput
          placeholder="🔍 Search crop or query..."
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>🌐</Text>
        </TouchableOpacity>
      </View>

      {/* 📋 Categories Grid */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2", padding: 15 },
  header: { marginBottom: 6, alignItems: "left" },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2E7D32",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  langBtn: {
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  langText: { fontSize: 18 },
  grid: { paddingBottom: 20 },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 15,
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: { fontSize: 32, marginBottom: 10 },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#4CAF50",
  },
});
