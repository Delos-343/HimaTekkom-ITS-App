import React, { useState, useCallback, useEffect } from "react";
import { View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';

export default function VideoDisplay({ id }) {
  const [playing, setPlaying] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("End of Video");
    }
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/youtubeId/${id}`)
      .then((response) => {
        const note = response.data;
        const youtubeId = note.url; // Change this line according to your data structure
        setVideoId(youtubeId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    videoId ?
      <View>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
      </View> :
      null
  );
}
