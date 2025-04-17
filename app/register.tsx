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
import { Theme } from "@/constants/theme";

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
      role: "user",
      router,
    });
    if (result === undefined) return;
    showError(String(result));
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
              keyboardType="number-pad"
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
          <Text style={styles.additionalText}>
            By clicking Agree and Continue below, I agree to{" "}
            <Text style={styles.additionalTextHighlights}>
              Terms of Services
            </Text>{" "}
            and{" "}
            <Text style={styles.additionalTextHighlights}>Privacy policy</Text>
          </Text>
          <TouchableOpacity
            onPress={() => handleRegister()}
            style={styles.registerBtn}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: Theme.FontSizes.BUTTON_TEXT,
              }}
            >
              Agree and Continue
            </Text>
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
    backgroundColor: Theme.Colors.background,
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 15,
    // backgroundColor: "#D9D9D9",
    backgroundColor: Theme.Colors.white,
    width: "90%",
    paddingBlock: 80,
  },
  headText: {
    fontSize: Theme.FontSizes.H1,
    marginBottom: 50,
  },
  inputs: {
    width: "100%",
    fontSize: Theme.FontSizes.TEXT_INPUT,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 17,
    paddingBottom: 17,
    // backgroundColor: "white",
    // backgroundColor: "#F8F9FA",
    borderColor: Theme.Colors.borderGray,
    borderWidth: 2,
  },
  inputsContainer: {
    width: "100%",
    gap: 20,
  },
  registerBtn: {
    // backgroundColor: "#101010",
    backgroundColor: Theme.Colors.primary,
    borderRadius: 5,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
    // fontSize: Theme.FontSizes.BUTTON_TEXT,
  },
  forgotPasswrodText: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  additionalText: {
    marginTop: 15,
    fontSize: 12.5,
    color: Theme.Colors.textGray,
    fontWeight: 500,
  },
  additionalTextHighlights: {
    color: Theme.Colors.primary,
    cursor: "pointer",
    fontWeight: 700,
  },
});
