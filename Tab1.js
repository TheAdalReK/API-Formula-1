import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,ImageBackground, Animated } from 'react-native';
export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
      fadeTitulo: new Animated.Value(0),
      fadeName: new Animated.Value(0),
      fadeTexto: new Animated.Value(0),
    };
    
  }
  
  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.fadeTitulo,
        {
          toValue: 1, // Valor final de la animación (1 para completamente visible)
          duration: 5000, // Duración de la animación en milisegundos
          useNativeDriver: true, // Utilizar el controlador nativo de animación para un mejor rendimiento
        }
      ),
      Animated.timing(
        this.state.fadeName,
        {
          toValue: 1, // Valor final de la animación (1 para completamente visible)
          duration: 6000, // Duración de la animación en milisegundos
          useNativeDriver: true, // Utilizar el controlador nativo de animación para un mejor rendimiento
        }
      ),
      Animated.timing(
        this.state.fadeTexto,
        {
          toValue: 1, // Valor final de la animación (1 para completamente visible)
          duration: 7000, // Duración de la animación en milisegundos
          useNativeDriver: true, // Utilizar el controlador nativo de animación para un mejor rendimiento
        }
      ),
    ]).start();
  }

  render() {
  // Programación de los objetos
    const name = this.props.route.params.name;
    const { fadeTitulo, fadeName, fadeTexto } = this.state;
    return (
      <ImageBackground source={{ uri: 'https://e0.pxfuel.com/wallpapers/302/833/desktop-wallpaper-ferrari-f1-75.jpg' }} style={styles.containerImage}>
        <View style={styles.container}>
          <Animated.Text style={[styles.title, { opacity: fadeTitulo }]}>
          Bienvenido
          </Animated.Text>
          <Animated.Text style={[styles.nombre, { opacity: fadeName }]}>
          {name}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: fadeTexto }]}>
            Todo el contenido de Formula 1 solo lo encontrarás aquí
          </Animated.Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9))',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: -100,
    textAlign: 'center',
    textTransform: 'uppercase',
    transform: [{ scaleY: 1 }],
  },
  nombre: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    transform: [{ scaleX: 1 }],
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
    paddingHorizontal: 20,
  },
});
