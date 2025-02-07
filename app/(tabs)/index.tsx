import React, { useEffect, useContext } from "react";

import { Text, View, ActivityIndicator } from "react-native";
import { Link, useRouter, useRootNavigationState } from "expo-router";

import { AuthContext } from "../../contexts/AuthContext";
import { useErrorWarning } from "../../contexts/ErrorWarningContext";

export default function Index() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState.key || authContext?.loading) return;
    if (!authContext?.user) {
      router.replace("/login");
    }
  }, [authContext?.user, authContext?.loading, router, navigationState.key]);

  const { showError } = useErrorWarning();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => showError("Hi")}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>If logged in {authContext?.user?.email}</Text>
    </View>
  );
}
