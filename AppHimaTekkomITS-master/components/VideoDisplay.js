import React, { useState, useCallback, useRef } from "react";
import { StyleSheet } from "react-native";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoDisplay() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("End of Video");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={'100%'}
        play={playing}
        videoId={"QDia3e12czc"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "❚❚" : "▶︎"} onPress={togglePlaying} style={styles.btn} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginVertical: '0.5rem',
  },
});
