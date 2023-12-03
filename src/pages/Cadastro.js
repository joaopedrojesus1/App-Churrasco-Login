import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Novo usuário criado com sucesso
      alert("Usuário criado com sucesso!");
      // Redirecionar para a página de login ou qualquer outra página necessária
      navigation.navigate("Login");
    } catch (error) {
      alert("Ocorreu um erro ao criar o usuário. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.scrollViewContainer}
      scrollEnabled={false}
    >
      <Image
        source={require("../images/fundochurras2.webp")}
        style={styles.backgroundImage}
      />
      <View style={styles.container2}>
        <Text style={styles.label}>Cadastre-se</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputContainer2}>
          <Text style={styles.inputLabel}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a Senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true} // Para esconder a senha enquanto é digitada
          />
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.blueText}> Logar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container2: {
    backgroundColor: "#A52A2A",
    borderRadius: 500,
    width: "150%",
    height: "70%",
    marginTop: "50%",
    padding: 30,
    justifyContent: "center",
    alignSelf: "center",
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
    width: "65%",
    color: "white",
    alignSelf: "center",
  },
  input: {
    width: "65%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#000",
    width: "30%",
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
    marginLeft: 190,
    marginTop: 10,
  },
  linkText: {
    color: "white",
    fontSize: 12,
    marginBottom: 15,
    textAlign: "center",
  },
  blueText: {
    color: "cyan",
    fontSize: 12,
    marginBottom: 15,
  },
});
