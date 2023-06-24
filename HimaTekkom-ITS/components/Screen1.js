import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import VideoDisplay from './VideoDisplay';

export default function Screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.frameContainer}>
        <Text style={styles.title}> LIVE NOW </Text>

        <View style={styles.videoContainer}>
          <VideoDisplay />
        </View>

        <View style={styles.divider}></View>

        <Text style={styles.bodyText}>
          HIMATEKKOM ITS dilatarbelakangi oleh kondisi mahasiswa teknik komputer ITS yang masih dinaungi olehhimpunan
          induk, HIMATEKTRO ITS.
        </Text>
        <Text style={styles.bodyText}>
          Adapun keresahan yang dimiliki oleh mahasiswa Teknik Komputer ITS antara lain isu keprofesian,pengembangan
          mahasiswa, dan harmonisasi antar mahasiswa, serta cita-cita bersama untuk dapat menaungi danmelayani secara
          mandiri kebutuhan mahasiswanya.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 50,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: Dimensions.get('window').width * (9 / 16), // Adjust the aspect ratio as per your video dimensions
    marginBottom: 10,
    overflow: 'hidden', // Hide any overflowing content
  },
  divider: {
    marginTop: 25,
  },
  bodyText: {
    color: '#0c0c0c',
    marginTop: 10,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
});
