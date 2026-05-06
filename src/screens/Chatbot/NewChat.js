// src/screens/chatbot/NewChat.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NewChat({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🆕 Start a New Chat</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <Text style={styles.buttonText}>Go to Chatbot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
