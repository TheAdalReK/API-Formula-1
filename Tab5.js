import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,Image, Button,TextInput } from 'react-native';
import Interfaz_inicio from "./Interfaz_inicio";
export default class Tab5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables
    };
    
  }

  

  componentDidMount(){
    var xhttp = new XMLHttpRequest();
    let _this = this;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          
          //console.log(innerHTML = xhttp.responseText);

          //var temp = xhttp.responseText;
          var datos = JSON.parse(xhttp.responseText);
          _this.setState({lista: datos.response});
        }
    };
    xhttp.open("GET", "https://adalbertocortes.000webhostapp.com/formula1/circuito.php", true);
    xhttp.send();
  }
  render() {
  //Programacion de los objetos
    
    return (
      <View>
        <Text style={styles.title}> Circuitos </Text>
        {/*<Text style={styles.text1}>this.props.route.params.name </Text>*/}

        <FlatList 
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.top}>
              <Text style={styles.text1}> Nombre del circuito: {item.name} </Text>
              <Image source={{uri:item.image}} style={{width:220, height:150, alignSelf: "center"}}/>
              <Text style={styles.text1}> Numero de vueltas: {item.laps} </Text>
              <Text style={styles.text1}>Pais: {item.competition.location.country} </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
   );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color:"orange",
    backgroundColor: "red",
    padding: 30,
  },
  top: {
    flex: 0.3,
    backgroundColor: '#E79A31',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text1:{
    fontSize:20,
    textAlign:"center",
    color:"black",
    marginTop:5,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
});