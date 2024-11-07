import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
    It seems this is a root file for the app. 
*/

// Import pages
import WelcomePage from "./welcome-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";

// Create navigation stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="welcome-page"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login-page"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register-page"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}
