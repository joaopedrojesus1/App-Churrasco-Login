import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,

} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login({ navigation }) {
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
        <Text style={styles.label}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />
        </View>

        <View style={styles.inputContainer2}>
          <Text style={styles.inputLabel}>Senha:</Text>
          <TextInput style={styles.input} placeholder="Digite a Senha" />
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Ainda não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.blueText}>Crie uma</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Receitas")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    width: '100%',
    height: '100%'

  },
  scrollViewContainer: {
    flexGrow: 1
  },

  container2: {
    backgroundColor: "#A52A2A",
    borderRadius: 500,
    width: "150%",
    height: "70%",
    marginTop:'50%',
    padding: 30,
    justifyContent: "center",
    alignSelf: "center",
    position: 'absolute'
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
    alignSelf: 'center'
  },
  input: {
    width: "65%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    alignSelf: 'center',
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
    textAlign:'center',
  },
  blueText: {
    color: "cyan",
    fontSize: 12,
    marginBottom: 15,
  },
});
