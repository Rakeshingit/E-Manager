import React, { useState, useContext, createContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { Snackbar } from "react-native-paper";

interface ErrorWarningContextType {
  showError: (message: string) => void;
  showWarning: (message: string) => void;
  hideError: () => void;
  hideWarning: () => void;
}

const ErrorWarningContext = createContext<ErrorWarningContextType | undefined>(
  undefined
);

export const ErrorWarningProvider = ({ children }: any) => {
  const [errorVisible, setErrorVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const showError = (message: string) => {
    setErrorMessage(message);
    setErrorVisible(true);
  };

  const showWarning = (message: string) => {
    setWarningMessage(message);
    setWarningVisible(true);
  };

  const hideError = () => {
    setErrorVisible(false);
    setErrorMessage("");
  };

  const hideWarning = () => {
    setWarningVisible(false);
    setWarningMessage("");
  };

  return (
    <ErrorWarningContext.Provider
      value={{ showError, showWarning, hideError, hideWarning }}
    >
      {children}
      <Modal transparent visible={errorVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={styles.title}>Error</Text>
            <Text style={styles.message}>{errorMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={hideError}>
              <Text style={styles.buttonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Snackbar
        visible={warningVisible}
        onDismiss={hideWarning}
        duration={3000}
      >
        {warningMessage}
      </Snackbar>
    </ErrorWarningContext.Provider>
  );
};

//Custom Hook that consumes context and expose the context values
export const useErrorWarning = () => {
  const context = useContext(ErrorWarningContext);
  if (context === undefined) {
    throw new Error(
      "useErrorWarning must be used within a ErrorWarningProvider"
    );
  }
  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popup: {
    width: 300,
    backgroundColor: "#ff4d4d",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff4d4d",
  },
});
