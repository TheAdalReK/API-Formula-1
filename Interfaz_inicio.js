import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Tab6 from "./Tab6";

import { Ionicons} from "@expo/vector-icons"

import { AntDesign } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
//  <MaterialCommunityIcons name="car-sports" size={24} color="white" />

import { FontAwesome } from '@expo/vector-icons';

export default class Interfaz_inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
    };
    
  }




  
  render() {
    const Tab = createBottomTabNavigator()
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Tab1}
        initialParams={{ name: this.props.route.params.name }}
        options={{
          headerShown:false,
          tabBarLabel1:"Home",
          tabBarIcon: ()=>(
            <Ionicons name="ios-home" size={24} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },

        }
        }
         />
        <Tab.Screen name="Pilotos" component={Tab2}
        
        options={{
          headerShown:false,
          tabBarLabel1:"Pilotos",
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="racing-helmet" size={24} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },

        }
        }

        />
        <Tab.Screen name="Posiciones" component={Tab3}
        
        options={{
          headerShown:false,
          tabBarLabel1:"Tabla de Posiciones",
          tabBarIcon: ()=>(
            <AntDesign name="table" size={24} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },
        }
        }

         />
        <Tab.Screen name="Equipos" component={Tab4}
        
        options={{
          headerShown:false,
          tabBarLabel1:"Equipos",
          tabBarIcon: ()=>(
            <AntDesign name="car" size={24} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },
        }
        }
        />
        <Tab.Screen name="Circuitos" component={Tab5}
        
        options={{
          headerShown:false,
          tabBarLabel1:"Circuitos",
          tabBarIcon: ()=>(
             <FontAwesome name="map-o" size={24} color="white" /> 
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },
        }
        }
        />
        <Tab.Screen name="VueltaRapida" component={Tab6}
        
        options={{
          headerShown:false,
          tabBarLabel1:"Fastlaps",
          tabBarIcon: ()=>(
            
            <Ionicons name="time-outline" size={24} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: "black", // color de fondo del tab bar
          },
        }
        }
        />

         
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  
});