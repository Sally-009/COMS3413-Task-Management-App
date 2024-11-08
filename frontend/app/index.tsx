import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import pages
import WelcomePage from "./welcome-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";

// Create navigation stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}