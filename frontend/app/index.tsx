import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";

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
import DarkModePage from "./tab/sub-pages/dark-mode-setting"; 
import UsernameSettingPage from "./tab/sub-pages/username-setting";
import EmailSettingPage from "./tab/sub-pages/email-setting";
import PasswordSettingPage from "./tab/sub-pages/password-setting";  
import DeleteAccountPage from "./tab/sub-pages/delete-account-setting";   
import NotificationSettingPage from "./tab/sub-pages/notification-setting";
import ProfileImagePage from "./tab/sub-pages/profile-image-setting"; 


// Create navigation stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TaskStack = createNativeStackNavigator();

// Task stack to include TaskList, CreateTaskPage, and TaskDetailPage
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
        options={{ title: "Task Details" }}
      />
    </TaskStack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Home", headerShown: false }}
      />
      <TaskStack.Screen
        name="TaskDetailPage"
        component={TaskDetailPage}
        options={{ title: "Task Details" }}
      />
    </TaskStack.Navigator>
  );
}

function SettingStackNavigator() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{ title: "Home", headerShown: false }}
      />
      <TaskStack.Screen
        name="UsernamePage"
        component={UsernameSettingPage}
        options={{ title: "Username" }}
      />
      <TaskStack.Screen
        name="PasswordPage"
        component={PasswordSettingPage}
        options={{ title: "Change Password" }}
      />
      <TaskStack.Screen
        name="ProfileImagePage"
        component={ProfileImagePage}
        options={{ title: "Profile Image" }}
      />
      <TaskStack.Screen
        name="EmailPage"
        component={EmailSettingPage}
        options={{ title: "Email" }}
      />
      <TaskStack.Screen
        name="DeleteAccountPage"
        component={DeleteAccountPage}
        options={{ title: "Delete Account" }}
      />
      <TaskStack.Screen
        name="NotificationPage"
        component={NotificationSettingPage}
        options={{ title: "Notifications" }}
      />
      <TaskStack.Screen
        name="DarkModePage"
        component={DarkModePage}
        options={{ title: "Dark Mode" }}
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
        component={HomeStackNavigator}
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
        component={SettingStackNavigator}
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
