// src/screens/chatbot/SearchChatLibrary.js
import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const dummyChats = [
  { id: "1", title: "Wheat price update" },
  { id: "2", title: "How to grow Rice in Kharif season" },
  { id: "3", title: "Maize storage tips" },
];

export default function SearchChatLibrary() {
  const [query, setQuery] = useState("");

  const filteredChats = dummyChats.filter(chat =>
    chat.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔍 Search Chat Library</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by keyword..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Text style={styles.chatText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  chatItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  chatText: { fontSize: 16 },
});
