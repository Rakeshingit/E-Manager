import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { Theme } from "../../constants/theme";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const authContext = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageHeading}>Settings</Text>
        <View>
          <View>{/* <Image source={<FontAwesome />} /> */}</View>
          <Text>{authContext?.userData?.name}</Text>
          <Text>{authContext?.userData?.role}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  pageHeading: {
    fontSize: Theme.FontSizes.H1,
    marginVertical: 20,
  },
});
