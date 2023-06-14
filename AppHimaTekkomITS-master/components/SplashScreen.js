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
      <Text style={styles.title}> Aplikasi <br /> Percobaan Belajar </Text>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.logo} />
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
    width: "50%", 
    height: "50%",
    resizeMode: 'contain',
    paddingVertical: '16px',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'DIN Pro',
    textAlign: 'center',
    letterSpacing: 3,
    color: '#0c0c0c',
  },
});

export default SplashScreen;
