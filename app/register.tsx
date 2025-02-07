import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { handleRegisterFB } from "../Services/Firebase/authentication";
import { Link, useRouter } from "expo-router";
import { useErrorWarning } from "@/contexts/ErrorWarningContext";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { showWarning, showError } = useErrorWarning();

  const handleRegister = async () => {
    if (name === "" || phone === "" || email === "" || password === "") {
      showWarning("Please fill all the fields");
      return;
    }
    if (phone.length !== 10) {
      showWarning("Phone number must be 10 digits");
      return;
    }
    if (password.length < 6) {
      showWarning("Password must be atleast 6 characters long");
      return;
    }
    const result = await handleRegisterFB({
      name,
      phone,
      email,
      password,
      router,
    });
    if (result === undefined) return;
    showError(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Create an account</Text>
      <View style={styles.innerContainer}>
        <View
          style={{
            width: "80%",
          }}
        >
          <View style={styles.inputsContainer}>
            <TextInput
              onChangeText={setName}
              style={styles.inputs}
              placeholder="Name"
            />
            <TextInput
              onChangeText={setPhone}
              style={styles.inputs}
              placeholder="Phone No."
            />
            <TextInput
              onChangeText={setEmail}
              style={styles.inputs}
              placeholder="Email"
            />
            <TextInput
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputs}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleRegister()}
            style={styles.loginBtn}
          >
            <Text style={{ color: "#ffffff" }}>Register</Text>
          </TouchableOpacity>
          <Link
            href={"/login"}
            style={{ textDecorationLine: "underline", cursor: "pointer" }}
          >
            Back to login
          </Link>
        </View>
      </View>
    </View>
  );
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
  },
});
