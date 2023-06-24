import React, { useState, useCallback, useRef } from "react";
import { View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoDisplay() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("End of Video");
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={"QDia3e12czc"}
        onChangeState={onStateChange}
      />
    </View>
  );
}
