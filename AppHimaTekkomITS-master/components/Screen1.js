import React from 'react';
import { View, Text, StyleSheet, Image , Dimensions  } from 'react-native';
import VideoDisplay from './VideoDisplay'

export default function Screen1() {
    
  return (
    <View style={styles.container}>
      <View style={styles.frameContainer}>

        <VideoDisplay />

        <Text style={styles.title}>
          LIVE NOW
        </Text>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: "50%", 
      height: "50%",
      resizeMode: 'contain',
    },
    frameContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: '.25rem',
    },
    square: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderRadius: 1520, // half of width or height
        alignItems: 'center',
        justifyContent: 'center',
      },
    bodyText: {
      fontSize: 14,
      fontWeight: '500',
      fontWeight: 'serif',
      textAlign: 'justify',
      justifyContent: 'center',
      paddingHorizontal: '7%',
      marginTop: '1rem',
    },
  });
  
