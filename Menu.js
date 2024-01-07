import React, { Component } from 'react';
import { View, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from "./Registro";
import Login from "./Login";
import Interfaz_inicio from "./Interfaz_inicio";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
    };
  }

  render() {
  //Programacion de los objetos
  const Stack = createNativeStackNavigator()
    
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={Registro} options={{
          title: 'Registro',
          headerStyle: {
            backgroundColor: '#AD0606',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Registro',
          headerStyle: {
            backgroundColor: '#AD0606',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Inicio" component={Interfaz_inicio} options={{
          title: 'Registro',
          headerStyle: {
            backgroundColor: '#AD0606',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
   );
  }
}