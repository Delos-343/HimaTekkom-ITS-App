import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

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
          { uri: ' https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3' },
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

  const decreaseVolume = () => {
    setVolume((prevVolume) => Math.max(0, prevVolume - 0.1));
  };

  const increaseVolume = () => {
    setVolume((prevVolume) => Math.min(1, prevVolume + 0.1));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.albumImage} />
      <Text style={styles.title}>HimaTekkom Radio</Text>
      <Text style={styles.artist}>ITS</Text>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>{isPlaying ? '❚❚' : '▶︎'}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.controls}>
        <TouchableOpacity onPress={decreaseVolume}>
          <Text style={styles.volumeButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseVolume}>
          <Text style={styles.volumeButton}>+</Text>
        </TouchableOpacity>
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
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    color: '#FFA500',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  artist: {
    color: '#2F4F4F',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  playButton: {
    borderRadius: 10,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
  },
  playButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F1F1F1',
    textAlign: 'center',
  },
  volumeButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000080',
    paddingHorizontal: 20,
  },
});

export default Screen3;

// Other APIs:

// * https://sv3.alhasmedia.com/listen/station_34/radio
// https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3
// https://digital.danubestreamwaves.org/wp-content/uploads/2021/03/BFR-API1.mp4