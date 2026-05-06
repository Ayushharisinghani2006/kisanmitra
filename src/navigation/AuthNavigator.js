// src/navigation/AuthNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Auth/OnboardingScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import LanguageSelectScreen from "../screens/Auth/LanguageSelectScreen";
import DrawerNavigator from "./DrawerNavigator";  // ✅ Import your drawer

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
      {/* ✅ Replace placeholder HomeScreen with DrawerNavigator */}
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
