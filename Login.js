import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TextInput, ImageBackground } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
      email: "",
      password: "",
      resultado: "",
      respuesta: "",
    };
    
  }

  

  render() {
  //Programacion de los objetos
    const btnLogin = () => {
       this.props.navigation.navigate("Inicio",{name:"mayoo"});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({resultado:xhttp.responseText});
           if(_this.state.resultado=="" || _this.state.resultado=="0"){
            _this.setState({respuesta:"campos incorrectos"});
          }else{
            _this.props.navigation.navigate("Inicio",{name:_this.state.resultado});
            _this.setState({respuesta:""});
          }
        }
      };
      xhttp.open("GET",'https://adalbertocortes.000webhostapp.com/login.php?email='+this.state.email+'&password='+this.state.password, true);
      xhttp.send();
    };
    const btnRegistro = () => {
      this.props.navigation.navigate("Registro");
    };
    
    return (
      <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/413/202/HD-wallpaper-checo-perez-automovilismo-red-bull-sergio-perez.jpg' }} style={styles.container}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> Login </Text>
            <Text style={styles.text1}> Correo </Text>
            <TextInput style={styles.input}
              placeholder="introduce email"
              placeholderTextColor="orange"
              keyboardType="email-address"
              onChangeText={email => this.setState({email})}
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
          <View>
          <Button color="black" title="    enviar     " onPress={btnLogin}> </Button>
          </View>
          <View>
          <Button color="black" title="   Registrar   " onPress={btnRegistro}> </Button>
          </View>
          <Text style={styles.text1}> {this.state.respuesta} </Text>
        </View>
      </ImageBackground>
   );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
});