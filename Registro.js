import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TextInput,ImageBackground } from 'react-native';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
      nombre: "",
      correo: "",
      password: "",
      edad: "",
      resultado: "",
    };
    
  }

  

  render() {
  //Programacion de los objetos
    const btnRegistro = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({resultado:xhttp.responseText});
        }
        
      };

      xhttp.open("GET", 'https://adalbertocortes.000webhostapp.com/registro.php?name='+this.state.nombre+'&email='+this.state.correo+'&password='+this.state.password, true);
      xhttp.send();
      console.log(this.state.resultado);
    };
    const btnLogin = () => {
      this.props.navigation.navigate("Login");
    };
    return (
      <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/522/1021/HD-wallpaper-f1-2022-w1-cars-motorsport-f1-car-formula-1.jpg' }} style={styles.containerImage}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> Registro </Text>
            <Text style={styles.text1}> Nombre </Text>
            <TextInput style={styles.input}
              placeholder="Introduce nombre"
              placeholderTextColor="orange"
              onChangeText={nombre => this.setState({nombre})}
            />
          </View>
          <View>
            <Text style={styles.text1}> Correo </Text>
            <TextInput style={styles.input}
              placeholder="introduce email"
              placeholderTextColor="orange"
              keyboardType="email-address"
              onChangeText={correo => this.setState({correo})}
            />
          </View>
          <View>
            <Text style={styles.text1}> Contraseña </Text>
            <TextInput style={styles.input}
              placeholder="introduce password"
              placeholderTextColor="orange"
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <Button color="black" title="       Registrar       " onPress={btnRegistro}> </Button>
          <Button color="black" title="         Login         " onPress={btnLogin}> </Button>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color:"orange",
    // marginTop:15,
    // padding: 30,
    margin: 10,
  },
  text1:{
    fontSize:20,
    textAlign:"center",
    color:"orange",
    marginTop:5,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  input: {
    width: 190,
    height: 40,
    borderWidth: 2,
    borderColor: 'orange',
    color: "orange",
    // backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    fontWeight: 'bold',
  },
});