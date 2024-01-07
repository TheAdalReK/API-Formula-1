import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button,TextInput, FlatList } from 'react-native';

export default class Tab3 extends Component {
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
    xhttp.open("GET", "https://adalbertocortes.000webhostapp.com/formula1/rankings_drivers.php", true);
    xhttp.send();
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}> Rankings de La Temporada 2022</Text>
        {[...Array(22)].map((_, i) => (
          <FlatList 
            key={`pilotos-${i}`}
            data={this.state.lista}
            renderItem={({ item }) => (
              <View style={styles.top}>
                <Text style={styles.text1}> Posición: {item.position} </Text>
                <Text style={styles.text1}> Numero del piloto: {item.driver.number} </Text>
                <Text style={styles.text1}> Nombre del piloto: {item.driver.name} </Text>
                <Image source={{uri:item.driver.image}} style={{width:90, height:90, alignSelf: "center"}}/>
                <Text style={styles.text1}> Equipo: {item.team.name} </Text>
                <Image source={{ uri: item.team.logo }} style={{ width: 200, height: 120, alignSelf: "center" }} />
                <Text style={styles.text1}> Puntos del piloto: {item.points} </Text>
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
    backgroundColor: "black",
    padding: 30,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
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
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
  },
});