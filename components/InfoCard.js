import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function InfoCard({ title, value }){

    const styles = StyleSheet.create({
        card:{
            alignItems: 'center',
            margin: 10,
            minWidth: 150,
        },
        text: {
            color: '#e8e8e8',
            margin: 4,
            marginLeft: 15,
            fontSize: 16,
        }
        
      });
return(
        <View style={styles.card}>
            <Text style={styles.text}>{title}</Text>        
            <Text style={[styles.text, { color: '#d3d3d3' }]}>{value}</Text>
        </View>
    )
}