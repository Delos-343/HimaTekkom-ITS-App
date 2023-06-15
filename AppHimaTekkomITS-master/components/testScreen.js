import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

const TestScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <View>
      {data.length > 0 ? (
        data.map((newsItem) => (

          <View key={newsItem.id}>
            
            <Text>{newsItem.author}</Text>
            <Text>{newsItem.title}</Text>
            <Text>{newsItem.caption}</Text>
            <Text>{newsItem.content}</Text>

            <Image source={{ uri: newsItem.image }} style={{ width: 200, height: 200 }} />

            <Text>{new Date(newsItem.createdAt).toLocaleString()}</Text>
            <Text>{new Date(newsItem.updatedAt).toLocaleString()}</Text>

          </View>

        ))
      ) : (

        <Text> Loading data . . . </Text>
        
      )}
    </View>
  );
};

export default TestScreen;