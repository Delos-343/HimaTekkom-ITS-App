import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const Screen3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.albumImage} />
      <Text style={styles.title}> HimaTekkom Radio </Text>
      <Text style={styles.artist}> ITS </Text>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> {isPlaying ? ' ❚❚ ' : ' ▶︎'} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

  {/*
  const playSound = async () => {
    if (sound === null) {
      const { sound: newSound } = await Audio.Sound.createAsync(
             // https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3
             // https://digital.danubestreamwaves.org/wp-content/uploads/2021/03/BFR-API1.mp4
        { uri: 'https://us1freenew.listen2myradio.com/live.mp3?typeportmount=s1_14239_stream_299257626' },
        { shouldPlay: true }
      );
      setSound(newSound);
    } else {
      await sound.playAsync();
    }
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/Logo_HimaTekkom-ITS.png')} style={styles.albumImage} />
      <Text style={styles.title}>Radio 1 Rock</Text>
      <Text style={styles.artist}>Bulgaria</Text>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {isPlaying ? ' ❚❚ ' : ' ▶︎ '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}; */}

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
  button: {
    borderRadius: 100,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F1F1F1',
    alignSelf: 'center',
  },
});

export default Screen3;
