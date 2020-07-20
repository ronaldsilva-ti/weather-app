import { StatusBar } from 'expo-status-bar'; 
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';


export default function App() {

  const [ darkTheme, setDarkTheme ] = useState(true);
  const [ currentTemperature, setCurrentTemperature ] = useState('27');
  const [ location, setLocation ] = useState('BR, Juiz de Fora');
  const [ currentHour, setCurrentHour ] = useState('13:00');


  const [ wind, setWind ] = useState('65')
  const [ umidity,setUmidity ] = useState('80')
  const [ tempMin, setTempMin ] = useState('21')
  const [ tempMax, setTempMax ] = useState('31')





  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',    
    },
    temperature:{
      alignItems:'center',
      flexDirection: 'row',
      marginTop:10,
    },
    temperatureText:{
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 18,
    },
    refreshButton:{
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView:{
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',  
    },
    info: {
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 345,
      height: 220,
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin: 13,
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoCard: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    themeButton: {
      margin: 1,
      marginLeft: 300,      
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25
    },
    squareButton: {
      backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 30,      
      marginBottom: 15
    },
    circleButton:{
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      margin: 5,
      width: 25,
      height: 25,
      borderRadius: 50
    }

    
  });


  return (
    <View style={styles.container}>      
        
        <TouchableOpacity style={styles.refreshButton}>
          {/* Refresh */}
          <Feather name="refresh-ccw" size={30} color={darkTheme ? 'white' : 'black'} />
        </TouchableOpacity>

          {/* Sol */}
        <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />

        <View style={styles.temperature}>
          <Text style={styles.temperatureText}>{currentTemperature}</Text>
          <Text style={[styles.temperatureText, { fontSize: 14 }]}>ºC</Text>
        </View>

    	  <Text style={[styles.temperatureText,{ fontSize: 14 }]} >{location}, {currentHour}</Text>

        <View style={styles.cardView}>
          <MainCard title="Manhã" backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'28º'} icon={'morning'}></MainCard> 
          <MainCard title="Tarde" backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} temperature={'28º'} icon={'afternoon'}></MainCard> 
          <MainCard title="Noite" backgroundColor={darkTheme ? '#008081' : '#38B7B8'} temperature={'28º'} icon={'night'}></MainCard> 
        </View>  

        <View style={styles.info}>
          <Text style={styles.infoText}>Informações Adicionais</Text>
          
          <View style={styles.infoCard}>
            <InfoCard title={'Vento'} value={`${wind} m/h`}></InfoCard>
            <InfoCard title={'Umidade'} value={`${umidity}%`}></InfoCard>   
            <InfoCard title={'Temp. Min'} value={`${tempMin}`}></InfoCard>        
            <InfoCard title={'Temp. Max'} value={`${tempMax}`}></InfoCard>      
          </View>
        </View>

        <View style={styles.themeButton}>
          <View style={styles.squareButton}>
            <TouchableOpacity style={styles.circleButton} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)} ></TouchableOpacity>
          </View>
       </View>
    </View>
  );
}


