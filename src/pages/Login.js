import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/imagefundo.png")} // Substitua pelo caminho da sua imagem de fundo
        style={styles.backgroundImage}
      />
      <View style={styles.container2}>
        <Text style={styles.label}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />
        </View>

        <View style={styles.inputContainer2}>
          <Text style={styles.inputLabel}>Senha:</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Ainda não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.blueText}>Crie uma</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
  },
  container2: {
    backgroundColor: "#A52A2A",
    borderRadius: 200,
    width: "100%",
    height: "100%",
    padding: 50,
    marginTop: "85%",
    position: "absolute",
  },
  label: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },

  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#000",
    width: "60%",
    opacity: 0.7,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  linkContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  linkText: {
    color: "white",
    fontSize: 12,
    marginBottom: 15,
  },
  blueText: {
    color: "cyan",
    fontSize: 12,
    marginBottom: 15,
  },
});
