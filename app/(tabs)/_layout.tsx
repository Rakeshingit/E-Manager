import { AuthProvider } from "@/contexts/AuthContext";
import { TouchableOpacity, Text } from "react-native";
import { handleLogout } from "@/Services/Firebase/authentication";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
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
        <Tabs.Screen name="another" options={{ title: "Man of steel" }} />
      </Tabs>
    </AuthProvider>
  );
}
