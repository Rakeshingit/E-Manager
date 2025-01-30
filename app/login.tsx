import { Text, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Log into your account</Text>
      <View style={styles.innerContainer}>
        <View style={{
          width: "80%",
        }}>
        <View style={styles.inputsContainer}>
        <TextInput  style={styles.inputs} placeholder="Email"/>
        <TextInput style={styles.inputs} placeholder="Password"/>
        </View>
        <Text style={styles.forgotPasswrodText}>Forgot password?</Text>
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={{color: "#ffffff"}}>Login</Text>
        </TouchableOpacity>
        <Text>or <Link href={"/register"} style={{textDecorationLine: "underline", cursor: "pointer"}}>Create a new account</Link></Text>
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
    backgroundColor: "#ffffff"
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
          marginBlock: 15,
  },
  forgotPasswrodText: {
    marginTop: 10,
    alignSelf: "flex-end",
    // width: "80%",
  }
})