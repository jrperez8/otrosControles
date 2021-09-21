import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Switch, CheckBox, Picker } from 'react-native';

const myImage = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [isActiveSwitch, setActiveSwitch] = useState(false);
  const [valSwitch,setValSwitch] = useState (0);
  const [sexo, setSexo] = useState(true);
  const [accesorio, setAccesorio] = useState("mouse");
  const [premio2, setPremio2] = useState("");

 
  const altSwitch = () => {
    setActiveSwitch(statePrevious => !statePrevious);
    if(!isActiveSwitch){
      setValSwitch(1)
    } else {
      setValSwitch(0)
    }
  }

  const metPremio = (item) => {
    setAccesorio(item)
    if (accesorio == "teclado"){
      setPremio2("Ganaste un Viaje")
    } 
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
        <Image
          source={require('./images/soft1.jpg')}
          style={styles.imagenes}
        />
        <Image
          source={require('./images/soft2.jpg')}
          style={styles.imagenes}
        />
        <Image 
          source={myImage}
          style={styles.imagenes}
        />
        <Image 
          source={{uri: 'https://www.concejodemedellin.gov.co/sites/default/files/Boton%20_Mesa%20de%20trabajo%201%20copia%204.png'}}
          style={styles.imagenes}
        />
        <ImageBackground 
          source= {myImage} 
          style={styles.imagenes}
        > <Text style={{color:'orange', fontSize:25, textAlign:'center', marginTop:5}}>Texto en Frente</Text>
        </ImageBackground>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Micrófono:  {isActiveSwitch ? " Activado " : " Desactivado "}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isActiveSwitch ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={altSwitch}
          value={isActiveSwitch}
        />
        <Text>Valor numérico: {valSwitch}</Text>
      </View>
      <View style={{flexDirection:'row', marginBottom: 10}}>
        <CheckBox
          value={sexo}
          onValueChange={setSexo}
          style={{alignSelf:'center'}}
        />
        <Text>Masculino/Femenino</Text>
      </View>
      <View>
      <Text>Por Favor Seleccione un tipo de accesorio</Text>
        <Picker
          selectedValue={accesorio}
          style={{ height:35, width: 150, borderColor:'white'}}
          onValueChange={(itemValue, itemIndex) => setAccesorio(itemValue)}
          //onValueChange={(itemValue, itemIndex) => setAccesorio(itemValue),()=>metPremio(itemValue)}
        >
          <Picker.Item label="Mouse" value="mouse" />
          <Picker.Item label="Teclado" value="teclado" />
          <Picker.Item label="SSD" value="ssd" />
          <Picker.Item label="Monitor 15" value="monitor" />
        </Picker>
      </View>
      <View>
        <Text>Producto seleccionado: {accesorio}</Text>
      </View>
      <View>
        <Text>Premio : {accesorio == "teclado" ? "Ganaste Viaje" : "No Ganaste"}</Text>
      </View>
      <View>
        <Text>{setPremio2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagenes: {
    width: 150,
    height: 100, 
    resizeMode: 'stretch',
    borderRadius: 20, 
    borderColor:'blue', 
    borderWidth:5, 
    marginLeft: 10,
    marginBottom: 5
  },
});
