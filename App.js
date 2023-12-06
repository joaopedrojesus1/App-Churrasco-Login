import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import SignUp from './src/pages/Cadastro';
import Home from './src/pages/home';
import Receitas from './src/pages/Receitas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen
          name="Receitas"
          component={Receitas}
          options={({ navigation }) => ({
            headerRight: () => <LogoutButton navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#A52A2A', // Defina a cor de fundo desejada
            },
            headerTintColor: '#fff', // Define a cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Componente do botão de logout
const LogoutButton = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Redireciona para a tela de Login
  };

  return (
    <View style={{ marginRight: 10 }}>
      <Button
        title="Logout"
        onPress={navigateToLogin}
        color={'#A52A2A'}
      />
    </View>
  );
};
