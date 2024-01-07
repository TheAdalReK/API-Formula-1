import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button,TextInput, FlatList } from 'react-native';

export default class Tab4 extends Component {
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
    xhttp.open("GET", "https://adalbertocortes.000webhostapp.com/formula1/equipos.php", true);
    xhttp.send();
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}> Equipos </Text>
          <FlatList 
            data={this.state.lista}
            renderItem={({ item }) => (
              <View style={styles.top}>
                <Text style={styles.text1}> ID: {item.id} </Text>
                <Text style={styles.text1}> Nombre: {item.name} </Text>
                <Image source={{ uri: item.logo }} style={{ width: 200, height: 120, alignSelf: "center" }} />
                <Text style={styles.text1}> Base: {item.base} </Text>
                <Text style={styles.text1}> Primer año del equipo: {item.first_team_entry} </Text>
                <Text style={styles.text1}> Campeonatos Totales: {item.world_championships} </Text>
                <Text style={styles.text1}> Numero de campeonatos ganados: {item.highest_race_finish.number} </Text>
                <Text style={styles.text1}> Numero de Pole positions: {item.pole_positions} </Text>
                <Text style={styles.text1}> Numero de vueltas más rapidas: {item.fastest_laps} </Text>
                <Text style={styles.text1}> Presidente del equipo: {item.president} </Text>
                <Text style={styles.text1}> Director: {item.director} </Text>
                <Text style={styles.text1}> Gerente tecnico: {item.technical_manager} </Text>
                <Text style={styles.text1}> Chasis: {item.chasis} </Text>
                <Text style={styles.text1}> Motor: {item.engine} </Text>
                <Text style={styles.text1}> Llantas: {item.tyres} </Text>
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
    borderTopLeftRadius: 180,
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
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
});