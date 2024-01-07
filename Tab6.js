import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button,TextInput, FlatList } from 'react-native';

export default class Tab6 extends Component {
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

          var datos = JSON.parse(xhttp.responseText);
          _this.setState({lista: datos.response});
        }
    };
    xhttp.open("GET", "https://adalbertocortes.000webhostapp.com/formula1/rankings_fastestlaps.php", true);
    xhttp.send();
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}> Vuelta más rapida </Text>
          <FlatList 
            data={this.state.lista}
            renderItem={({ item }) => (
              <View style={styles.top}>
                <Text style={styles.text1}> ID Carrera: {item.race.id} </Text>
                <Text style={styles.text1}> ID del piloto: {item.driver.id} </Text>
                <Text style={styles.text1}> Nombre del piloto: {item.driver.name} </Text>
                <Text style={styles.text1}> Abrebiacion del piloto: {item.driver.abbr} </Text>
                <Text style={styles.text1}> Numero del piloto: {item.driver.number} </Text>
                <Image source={{ uri: item.driver.image }} style={{ width: 200, height: 120, alignSelf: "center" }} />
                <Text style={styles.text1}> ID Equipo: {item.team.id} </Text>
                <Text style={styles.text1}> Nombre del EQUIPO: {item.team.name} </Text>
                <Image source={{ uri: item.team.logo }} style={{ width: 200, height: 120, alignSelf: "center" }} />
                <Text style={styles.text1}> Posición: {item.position} </Text>
                <Text style={styles.text1}> Numero de vueltas: {item.laps} </Text>
                <Text style={styles.text1}> Tiempo más rapido: {item.time} </Text>
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
    backgroundColor: "gray",
    padding: 30,
    borderBottomRightRadius: 180,
  },
  text1:{
    fontSize:20,
    textAlign:"center",
    color:"black",
    marginTop:5,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  top: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});