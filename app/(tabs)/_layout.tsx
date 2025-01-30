import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home" }}/>
    <Tabs.Screen name="another" options={{title: "Man of steel"}}/>
  </Tabs>;
}