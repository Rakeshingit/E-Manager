import { Stack } from "expo-router";
import { ErrorWarningProvider } from "../contexts/ErrorWarningContext";

export default function RootLayout() {
  return (
    <ErrorWarningProvider>
      <Stack>
        <Stack.Screen
          name="login"
          options={{ title: "login screen", headerShown: false }}
        />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ErrorWarningProvider>
  );
}
