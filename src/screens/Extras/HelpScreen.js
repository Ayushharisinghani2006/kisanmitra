// src/screens/Extras/HelpScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const faqData = [
  {
    id: "1",
    question: "How to check soil quality?",
    answer:
      "Use a pH kit or submit a soil sample at your nearest agricultural office.",
  },
  {
    id: "2",
    question: "How to deal with pest attacks?",
    answer:
      "Identify the pest type and use recommended pesticides or organic remedies.",
  },
  {
    id: "3",
    question: "How to check crop market prices?",
    answer:
      "Go to the Market & Pricing section to see real-time mandi prices for your crops.",
  },
  {
    id: "4",
    question: "How to irrigate crops efficiently?",
    answer:
      "Use drip irrigation or sprinkler systems, and monitor soil moisture regularly.",
  },
];

export default function HelpScreen() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleCall = () => {
    Linking.openURL("tel:+911234567890");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:support@kisanmitra.com");
  };

  const handleChat = () => {
    alert("Opening chat with Farm Advisor...");
  };

  const renderFaq = ({ item }) => (
    <TouchableOpacity
      style={styles.faqCard}
      onPress={() => toggleExpand(item.id)}
    >
      <Text style={styles.question}>{item.question}</Text>
      {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Search FAQs..."
        value={search}
        onChangeText={setSearch}
      />

      {/* FAQ Section */}
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <FlatList
        data={filteredFaq}
        keyExtractor={(item) => item.id}
        renderItem={renderFaq}
        scrollEnabled={false}
      />

      {/* Contact Support */}
      <Text style={styles.sectionTitle}>Contact Support</Text>
      <View style={styles.contactRow}>
        <TouchableOpacity style={styles.contactBtn} onPress={handleCall}>
          <Text style={styles.contactText}>📞 Call Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactBtn} onPress={handleEmail}>
          <Text style={styles.contactText}>✉️ Email Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactBtn} onPress={handleChat}>
          <Text style={styles.contactText}>💬 Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback */}
      <Text style={styles.sectionTitle}>Feedback</Text>
      <TouchableOpacity
        style={styles.feedbackBtn}
        onPress={() => alert("Thank you for your feedback!")}
      >
        <Text style={styles.feedbackText}>⭐ Submit Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F2",
    padding: 15,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E7D32",
    marginVertical: 10,
  },
  faqCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  answer: {
    fontSize: 14,
    marginTop: 8,
    color: "#555",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  contactBtn: {
    backgroundColor: "#A5D6A7",
    padding: 12,
    borderRadius: 15,
    marginVertical: 5,
    flexBasis: "30%",
    alignItems: "center",
  },
  contactText: {
    color: "#2E7D32",
    fontWeight: "600",
    textAlign: "center",
  },
  feedbackBtn: {
    backgroundColor: "#FFEB3B",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  feedbackText: {
    color: "#333",
    fontWeight: "700",
    fontSize: 16,
  },
});
