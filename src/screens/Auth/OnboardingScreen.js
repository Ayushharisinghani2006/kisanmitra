// src/screens/Auth/OnboardingScreen.js
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";

const COLORS = {
  primary: "#2e7d32",
  background: "#d0f0c0", // light green background
  textPrimary: "#2e7d32",
  textSecondary: "#555",
};

export default function OnboardingScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const slideAnim = useRef(new Animated.Value(20)).current; // slide up for tagline

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace("SignIn");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[
          styles.logo,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      />

      <Animated.Text
        style={[
          styles.title,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        KisanMitra
      </Animated.Text>

      <Animated.Text
        style={[
          styles.tagline,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        Empowering Farmers with Smart Solutions
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background, // light green
  },
  logo: {
    width: 400,   
    height: 400,  
    marginBottom: 25,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28, 
    fontWeight: "bold",
    color: COLORS.textPrimary,
    letterSpacing: 1,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 15,
    color: COLORS.textSecondary,
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
