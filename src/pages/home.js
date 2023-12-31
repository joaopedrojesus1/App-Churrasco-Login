import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Nossa Empresa</Text>
      <Text style={styles.description}>
        A "SteakTalk" é a sua parceira perfeita quando se trata de churrascos incríveis. 
        Nossa jornada começou há mais de uma década, com a visão de proporcionar a todos uma experiência culinária excepcional ao ar livre. 
        Desde então, temos trabalhado incansavelmente para trazer à sua mesa os sabores autênticos de um bom churrasco.
      </Text>

      <Image source={require('../../images/churrasco.png')} style={styles.image} />

      <Text style={styles.description}>
        Nossa paixão é garantir que você tenha as ferramentas necessárias para se tornar um mestre do churrasco. 
        Investimos anos de pesquisa e desenvolvimento para criar o nosso aplicativo de calculadora de churrasco, que se tornou a referência para entusiastas de churrasco em todo o mundo. 
        Com ele, você pode criar receitas personalizadas, calcular o tempo de cozimento perfeito e a quantidade de ingredientes necessários para preparar churrascos deliciosos que farão sua família e amigos pedirem mais.
        Te esperamos para ter uma experiência incrível conosco, nossos funcionários estão de braços abertos
        para lhe atender e auxiliar.
      </Text>

      <Image source={require('../../images/funcionario.png')} style={styles.image} />

      <Text style={styles.titleloca}>Localização</Text>

      <View style={styles.locationContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.5954, // localização fictícia
            longitude: -48.5480, // localização fictícia
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -27.5954, // localização fictícia
              longitude: -48.5480, // localização fictícia
            }}
            title="SteakTalk"
            description="123 Rua do Churrasco Feliz"
          />
        </MapView>
      </View>

        <Text style={styles.address}>
          Rua do Churrasco Feliz,123
          {"\n"}
          Cidade do Churrasco, Estado da Satisfação
          {"\n"}
          CEP: 12345-678
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  },
  titleloca: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 36
  },
  description: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'left',
    paddingBottom:20,
  
  },
  address: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    backgroundColor: '#A52A2A',
    borderRadius: 15,
    padding: 25,
    lineHeight: 35
  },
  image: {
    flex: 1,
    borderRadius: 25,
    height: 300,
    width: '100%'
        
  },  
  locationContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16
  },
  map: {
    height: 300,
    marginTop:10,
    marginBottom:20
    
  },
});
