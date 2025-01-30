import { Text, View, TextInput, StyleSheet, TouchableOpacity, Scroll} from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Create an account</Text>
      <View style={styles.innerContainer}>
        <View style={{
          width: "80%",
        }}>
        <View style={styles.inputsContainer}>
        <TextInput  style={styles.inputs} placeholder="Name"/>
        <TextInput style={styles.inputs} placeholder="Phone No."/>
        <TextInput  style={styles.inputs} placeholder="Email"/>
        <TextInput style={styles.inputs} placeholder="Password"/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={{color: "#ffffff"}}>Register</Text>
        </TouchableOpacity>
        <Link href={"/login"} style={{textDecorationLine: "underline", cursor: "pointer"}}>Back to login</Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "space-around",
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    width: "90%",
    paddingBlock: 80,
  },
  headText: {
    fontSize: 40,
    marginBottom: 50,
  },
  inputs: {
    width: "100%",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "white",
  },
  inputsContainer: {
    width: "100%",
    gap: 20,
  },
  loginBtn: {
    backgroundColor: "#101010",
          borderRadius: 5,
          padding: 20,
          width: "100%",
          alignItems: "center",
          marginTop: 25,
          marginBottom: 10,
  },
  forgotPasswrodText: {
    marginTop: 10,
    alignSelf: "flex-end",
    // width: "80%",
  }
})