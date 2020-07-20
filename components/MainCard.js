import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, Fontisto} from '@expo/vector-icons'; 



export default function MainCard({ title, backgroundColor, icon, temperature }){

    const Icon = () => {
      if(icon === 'morning') return <Feather name="sun" style={styles.cardIcon} size={40} color="white" />
      if(icon === 'afternoon') return <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />
      if(icon === 'night') return <Feather name="cloud-rain" style={styles.cardIcon} size={40} color="white" />
    }


    const styles = StyleSheet.create({       
        card:{      
          backgroundColor: backgroundColor, 
          justifyContent: 'center',
          alignItems: 'center',          
          margin:10,
          width: 102,
          height:190,
          borderRadius: 20,
        },        
        refreshButton:{
          position: 'absolute',
          margin: 30,
          alignSelf: 'flex-start',
        },
        text: {
          color: 'white',
          margin: 15,
          fontSize: 20,
        },
        cardIcon: {
          color: 'white',
          margin: 15,
        }
      });


    return(
        <View style={styles.card}>
            <Text style={styles.text} >{title}</Text>
            <Icon></Icon>
            <Text style={styles.text}>{temperature}</Text>
        </View>
    )
}