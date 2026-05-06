import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Sample market data
const mandiData = [
  { id: "1", crop: "Wheat 🌾", price: 2050, min: 1900, max: 2200, change: +50, mandi: "Jaipur", lastUpdated: "Today 9:30 AM" },
  { id: "2", crop: "Rice 🌱", price: 1980, min: 1800, max: 2100, change: -20, mandi: "Ajmer", lastUpdated: "Today 9:30 AM" },
  { id: "3", crop: "Maize 🌽", price: 1650, min: 1600, max: 1700, change: 0, mandi: "Kota", lastUpdated: "Today 9:30 AM" },
  { id: "4", crop: "Barley 🌾", price: 1720, min: 1650, max: 1800, change: +30, mandi: "Bikaner", lastUpdated: "Today 9:30 AM" },
  { id: "5", crop: "Sugarcane 🍬", price: 3150, min: 3000, max: 3300, change: -10, mandi: "Alwar", lastUpdated: "Today 9:30 AM" },
];

export default function MarketScreen() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(["Wheat 🌾", "Rice 🌱"]);

  // Filter crops based on search
  const filteredData = useMemo(() => {
    return mandiData.filter(item =>
      item.crop.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Toggle favorite
  const toggleFavorite = (crop) => {
    setFavorites(prev =>
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    );
  };

  // Render a crop card
  const renderCard = ({ item }) => {
    const isFavorite = favorites.includes(item.crop);
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.crop}>{item.crop}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(item.crop)}>
            <Text style={styles.favorite}>{isFavorite ? "⭐" : "☆"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>₹ {item.price} / Quintal</Text>
        <Text style={styles.range}>Range: ₹{item.min} – ₹{item.max}</Text>
        <Text style={[styles.change, { color: item.change > 0 ? "green" : item.change < 0 ? "red" : "gray" }]}>
          {item.change > 0 ? `↑ +${item.change}` : item.change < 0 ? `↓ ${item.change}` : "No change"}
        </Text>
        <Text style={styles.mandi}>📍 {item.mandi}</Text>
        <Text style={styles.lastUpdated}>🕒 {item.lastUpdated}</Text>

        <TouchableOpacity style={styles.trendButton}>
          <Text style={styles.trendText}>📈 View Trend</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="🔍 Search crop..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2} // grid view
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF8F2", padding: 15 },
  search: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  crop: { fontSize: 18, fontWeight: "700" },
  favorite: { fontSize: 20 },
  price: { fontSize: 16, marginTop: 5, color: "#2E7D32" },
  range: { fontSize: 12, marginVertical: 2, color: "#555" },
  change: { fontSize: 12, fontWeight: "bold" },
  mandi: { fontSize: 12, color: "#666" },
  lastUpdated: { fontSize: 10, color: "#888", marginTop: 2 },
  trendButton: {
    marginTop: 8,
    backgroundColor: "#A5D6A7",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  trendText: { fontWeight: "600", color: "#2E7D32" },
});
