// src/screens/Auth/SignInScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LanguageSelect")}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30, color: "#2e7d32" },
  input: { width: "90%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: "#2e7d32", padding: 14, borderRadius: 8, width: "90%" },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 16 },
  link: { marginTop: 15, color: "#2e7d32" },
});
