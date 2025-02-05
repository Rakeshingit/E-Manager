import React, {useEffect} from "react";

import { Text, View} from "react-native";
import {Link, router, useRootNavigationState} from "expo-router";

import {AuthContext} from "../../contexts/AuthContext";

export default function Index() {
  const usr = AuthContext();
  const navigationState = useRootNavigationState();
  console.log(`Hi ${usr?.name}`);

  useEffect(() => {
    if(!navigationState.key) return;
    if(!usr) router.replace("login");
  }, [navigationState.key ,usr]);

  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/login"}>Go to another screen</Link>
    </View>
  );
}
