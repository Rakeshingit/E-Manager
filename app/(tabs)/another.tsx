import { Text, View} from "react-native";
import {Link} from "expo-router";

export default function Another() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Text>Hi my name is</Text>
      {/* <Link href={"/another"}>Go to another screen</Link> */}
    </View>
  );
}