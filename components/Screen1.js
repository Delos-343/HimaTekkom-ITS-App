import React from 'react';
import { View, Text, StyleSheet, Image , Dimensions  } from 'react-native';
import VideoDisplay from './VideoDisplay'

export default function Screen1() {
    
  return (
    <View style={styles.container}>
      <View style={styles.frameContainer}>
        <Text style={styles.title}>
          LIVE NOW
        </Text>
        
        <VideoDisplay />

        <View style={styles.divider}></View>

        <Text style={styles.bodyText}>
          HIMATEKKOM ITS dilatarbelakangi
          oleh kondisi mahasiswa teknik komputer ITS yang
          masih dinaungi oleh himpunan induk, HIMATEKTRO
          ITS.
        </Text>  
        <Text style={styles.bodyText}>  
          Adapun keresahan yang dimiliki oleh 
          mahasiswa Teknik Komputer ITS antara lain isu
          keprofesian, pengembangan mahasiswa, dan 
          harmonisasi antar mahasiswa, serta cita-cita
          bersama untuk dapat menaungi dan melayani
          secara mandiri kebutuhan mahasiswanya.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 'auto',
    paddingBottom: 50,
    paddingHorizontal: 10,
  },
  divider:{
    marginTop: 50,
  },
  bodyText: {
    color: 'black',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'justify',
    paddingHorizontal: '7%',
  },
});
