import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGES = [
  { code: "hi", label: "हिंदी (Hindi)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "en", label: "English" },
];

const LanguageButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function LanguageSelectScreen({ navigation }) {
  const showError = (message) =>
    Alert.alert("Error", message || "Something went wrong. Please try again.");

  const selectLanguage = useCallback(
    async (code) => {
      try {
        await AsyncStorage.setItem("appLanguage", code);

        // ✅ Navigate to DrawerNavigator (which will load Home by default)
        navigation.replace("MainDrawer");

        // 👉 If you ever want to force Home screen explicitly, use this instead:
        // navigation.replace("DrawerNavigator", { screen: "Home" });
      } catch (err) {
        console.error("Language save error:", err);
        showError();
      }
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Language</Text>
      {LANGUAGES.map((lang) => (
        <LanguageButton
          key={lang.code}
          label={lang.label}
          onPress={() => selectLanguage(lang.code)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
    color: "#2e7d32",
  },
  button: {
    backgroundColor: "#2e7d32",
    paddingVertical: 14,
    borderRadius: 8,
    width: "80%",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
