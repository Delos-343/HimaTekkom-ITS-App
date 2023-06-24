import React, { useEffect } from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.logo} />
      <Text style={styles.title}> Aplikasi </Text>
      <Text style={styles.title}> Percobaan Belajar </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  logo: {
    width: 300, 
    height: 300,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: 3,
    color: '#0c0c0c',
    marginTop: 50,
  },
});

export default SplashScreen;
