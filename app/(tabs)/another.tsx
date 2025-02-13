import { Text, View} from "react-native";
import {Link} from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Another() {
  const authContext = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Text>Hi my name is {authContext?.user?.email}</Text>
      {/* <Link href={"/another"}>Go to another screen</Link> */}
    </View>
  );
}