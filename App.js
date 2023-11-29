import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
          options={{
            headerRight: () => <Button title="Logout" color="#A52A2A" />,
            headerStyle: {
              backgroundColor: '#A52A2A', // Defina a cor de fundo desejada
            },
            headerTintColor: '#fff', // Define a cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
