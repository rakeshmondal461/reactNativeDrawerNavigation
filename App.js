import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import HomeActivity from "./activities/HomeActivity";
import ProfileActivity from "./activities/ProfileActivity";
import FeedActivity from "./activities/FeedActivity";
import SettingsActivity from "./activities/SettingsActivity";
import CustomDrawerComponent from "./components/CustomDrawerComponent";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerComponent {...props} />}
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -20,
          },
          drawerActiveBackgroundColor: "#A020F0",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeActivity}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileActivity}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="News Feed"
          component={FeedActivity}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="md-newspaper-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsActivity}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="md-settings-outline" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
