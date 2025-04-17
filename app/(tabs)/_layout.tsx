import FontAwesome from "@expo/vector-icons/FontAwesome";

import { AuthProvider } from "@/contexts/AuthContext";
import { TouchableOpacity, Text } from "react-native";
import { handleLogout } from "@/Services/Firebase/authentication";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Theme } from "@/constants/theme";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Theme.Colors.primary,
          tabBarInactiveTintColor: Theme.Colors.textGray,
          tabBarStyle: {
            elevation: 8,
            shadowOpacity: 0.1,
            shadowRadius: 4,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => {
                  handleLogout();
                }}
              >
                <MaterialIcons name="logout" size={24} color="black" />
                <Text>Logout</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="events"
          options={{
            title: "Events",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="calendar" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="teams"
          options={{
            title: "Teams",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="users" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="gear" color={color} />
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
