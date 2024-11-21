import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

// Import pages
import WelcomePage from "./welcome-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import HomePage from "./tab/home-page";
import TaskListPage from "./tab/task-list-page";
import SocialPage from "./tab/social-page";
import SettingPage from "./tab/setting-page";
import CreateTaskPage from "./tab/sub-pages/create-task-page";
import TaskDetailPage from "./tab/sub-pages/task-detail-page";

// Create navigation stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TaskStack = createNativeStackNavigator();

// Task stack to include TaskList and CreateTaskPage
function TaskStackNavigator() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="TaskListPage"
        component={TaskListPage}
        options={{ title: "Tasks", headerShown: false }}
      />
      <TaskStack.Screen
        name="CreateTaskPage"
        component={CreateTaskPage}
        options={{ title: "Create New Task" }}
      />
      <TaskStack.Screen
        name="TaskDetailPage"
        component={TaskDetailPage}
        options={{ title: "Task Detail" }}
      />
    </TaskStack.Navigator>
  );
}

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5157C7",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#5157C7",
        },
        tabBarActiveTintColor: "#2CEB92",
        tabBarInactiveTintColor: "#fff",
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="checklist" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={SocialPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen
          name="tab-navigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
