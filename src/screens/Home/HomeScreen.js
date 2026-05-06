// src/screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const farmerName = "Ram Singh"; // later fetch from user profile or API

  // Mock weather → replace with API later
  const weather = {
    forecast: "🌧️ Rain expected in 3 hours",
    temp: "28°C",
    humidity: "70%",
    wind: "12 km/h",
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Greeting Section */}
      <View style={styles.greetingCard}>
        <Text style={styles.greeting}>👋 Namaste Shri {farmerName} Ji</Text>
        <Text style={styles.subtext}>
          Welcome back to <Text style={styles.highlight}>KisanMitra</Text>.
        </Text>
        <Text style={styles.smallText}>
          Here’s today’s advisory for your farm 🌾
        </Text>
      </View>

      {/* Weather Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌦️ Weather Forecast</Text>
        <Text style={styles.weatherText}>{weather.forecast}</Text>
        <Text style={styles.weatherDetail}>
          🌡️ {weather.temp}   💧 {weather.humidity}   💨 {weather.wind}
        </Text>
        <TouchableOpacity style={styles.voiceBtn}>
          <Text style={styles.voiceText}>🔊 Listen in Hindi</Text>
        </TouchableOpacity>
      </View>

      {/* Daily Crop Tip */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌿 Daily Crop Tip</Text>
        <Text style={styles.tipText}>
          Avoid irrigation today due to expected rainfall.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Crops")}
          style={styles.linkBtn}
        >
          <Text style={styles.linkText}>➡️ Go to Crop Advisory</Text>
        </TouchableOpacity>
      </View>

      {/* Community Highlight */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚜 Community Highlight</Text>
        <Text style={styles.tipText}>
          Ramesh from Amritsar saved 20% fertilizer using our advisory.
        </Text>
      </View>

      {/* Market Snapshot */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📈 Market Price Snapshot</Text>
        <Text style={styles.tipText}>Wheat in Ludhiana Mandi: ₹2,050/qtl</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Market")}
          style={styles.linkBtn}
        >
          <Text style={styles.linkText}>➡️ View Market Prices</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Crops")}
        >
          <Text style={styles.actionIcon}>📷</Text>
          <Text style={styles.actionText}>Upload Crop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <Text style={styles.actionIcon}>🎤</Text>
          <Text style={styles.actionText}>Ask Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Crops")}
        >
          <Text style={styles.actionIcon}>📑</Text>
          <Text style={styles.actionText}>My Advisory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Market")}
        >
          <Text style={styles.actionIcon}>📍</Text>
          <Text style={styles.actionText}>Nearby Mandi</Text>
        </TouchableOpacity>
      </View>

      {/* Today’s Task */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎖️ Today’s Task</Text>
        <Text style={styles.tipText}>
          Ask 1 question to chatbot today → earn Smart Farmer badge.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chatbot")}
          style={styles.linkBtn}
        >
          <Text style={styles.linkText}>➡️ Go to Chatbot</Text>
        </TouchableOpacity>
      </View>

      {/* Motivational Quote */}
      <View style={[styles.card, styles.quoteCard]}>
        <Text style={styles.quoteText}>
          🌱 “A farmer is the backbone of India. Your hard work feeds millions.”
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  greetingCard: {
    padding: 20,
    backgroundColor: "#2e7d32",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 20,
  },
  greeting: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  subtext: { fontSize: 16, color: "#e0f2f1", marginTop: 6 },
  highlight: { fontWeight: "bold", color: "#ffeb3b" },
  smallText: { fontSize: 13, color: "#c8e6c9", marginTop: 3 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 18,
    marginBottom: 8,
    color: "#2e7d32",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2e7d32",
  },
  weatherText: { fontSize: 15, marginBottom: 5 },
  weatherDetail: { fontSize: 14, color: "#555" },
  voiceBtn: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2e7d32",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  voiceText: { color: "#fff", fontSize: 13, fontWeight: "600" },

  tipText: { fontSize: 14, color: "#333", marginBottom: 5 },
  linkBtn: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  linkText: { color: "#2e7d32", fontWeight: "600", fontSize: 13 },

  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 25,
  },
  actionCard: {
    width: "40%",
    backgroundColor: "#fff",
    margin: 8,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 2,
  },
  actionIcon: { fontSize: 28, marginBottom: 6 },
  actionText: { fontSize: 14, fontWeight: "600", color: "#333" },

  quoteCard: { backgroundColor: "#e8f5e9", alignItems: "center" },
  quoteText: { fontSize: 13, fontStyle: "italic", color: "#2e7d32" },
});

export default HomeScreen;
