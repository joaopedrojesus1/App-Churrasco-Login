import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Video
        source={require("../videos/Videochurrasco.mp4")} // Substitua pelo caminho do seu vídeo
        style={StyleSheet.absoluteFill}
        isLooping
        isMuted
        shouldPlay
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <Image source={require("../images/logo.png")} style={styles.image} />
      <Text style={styles.text}>SteakTalk</Text>
      <Text style={styles.subtext}>
        Alguém coloca algum texto aqui, estou sem criatividade
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText2}>Sign Up</Text>
      </TouchableOpacity>
      {/* Adicione outras informações ou elementos aqui, se necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white", 
    opacity: 0.7
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
    color: "#A52A2A",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 15,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#A52A2A",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonText2: {
    color: "#A52A2A",
    fontSize: 18,
  },
  button2: {
    borderColor: "#A52A2A",
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
});

export default Home;