import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const Screen3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [volume, setVolume] = useState(1.0); // Initial volume level

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setVolumeAsync(volume); // Update volume when it changes
    }
  }, [volume]);

  const playSound = async () => {
    try {
      if (sound === null) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: 'https://sv3.alhasmedia.com/listen/station_34/radio' },
          { shouldPlay: true }
        );
        setSound(newSound);
      } else {
        await sound.playAsync();
      }
      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound !== null) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error pausing audio:', error);
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.albumImage} />
      <Text style={styles.title}>
        HimaTekkom Radio
      </Text>
      <Text style={styles.artist}>
        ITS
      </Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
          <View style={styles.playButton}>
            <Text style={styles.playButtonText}>
              { isPlaying ? '❚❚' : '▶︎' }
            </Text>
          </View>
        </TouchableOpacity>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={volume}
          onValueChange={handleVolumeChange}
          minimumTrackTintColor="#f1f1f1"
          maximumTrackTintColor="#f1f1f1"
          thumbTintColor="#f1f1f1"
        />
      </View>
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
  albumImage: {
    width: 180,
    height: 180,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFA500',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  artist: {
    color: '#000080',
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
    letterSpacing: 1.5,
  },
  slider: {
    width: 300,
    marginTop: 35,
  },
  controls: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
    paddingVertical: 25,
  },
  playButton: {
    borderRadius: 10,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  playButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000080',
    textAlign: 'center',
  },
});

export default Screen3;

// Other APIs:

// * https://sv3.alhasmedia.com/listen/station_34/radio
// https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3
// https://digital.danubestreamwaves.org/wp-content/uploads/2021/03/BFR-API1.mp4