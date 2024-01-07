import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button,TextInput, FlatList } from 'react-native';

export default class Tab2 extends Component {
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
    xhttp.open("GET", "https://adalbertocortes.000webhostapp.com/formula1/drivers.php", true);
    xhttp.send();
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}> Carrera del Piloto </Text>
        {[...Array(13)].map((_, i) => (
          <FlatList 
            key={`pilotos-${i}`}
            data={this.state.lista}
            renderItem={({ item }) => (
              <View style={styles.top}>
                <Text style={styles.text1}> Nombre del piloto: {item.name} </Text>
                <Image source={{uri:item.image}} style={{width:90, height:90, alignSelf: "center"}}/>
                <Text style={styles.text1}> Nacianalidad: {item.nationality} </Text>
                <Text style={styles.text1}> Lugar: {item.birthplace} </Text>
                <View>
                  {item.teams.map((team, j) => (
                    <View key={`${team.season}-${team.team.name}-${j}`}>
                      <Text style={styles.text1}>Temporada: {team.season}</Text>
                      <Text style={styles.text1}>Equipo: {team.team.name}</Text>
                      <Image source={{ uri: team.team.logo }} style={{ width: 200, height: 120, alignSelf: "center" }} />
                    </View>
                  ))}
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ))}
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
    borderTopRightRadius: 180,
    borderBottomLeftRadius: 180,
  },
  top: {
    flex: 1,
    backgroundColor: 'rgba(181, 193, 0,1)',
    borderWidth: 5,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
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