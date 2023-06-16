import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Screen2 = () => {
  
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const renderNewsItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsItem', { item })}>
        <View style={styles.container}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <View style={styles.newsreel}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.date}>
              {new Date(item.createdAt).toLocaleDateString()}
            </Text>
            <Text numberOfLines={3}>{item.content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={newsData}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ padding: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  newsreel: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
    paddingVertical: '8px',
  }
})

export default Screen2;