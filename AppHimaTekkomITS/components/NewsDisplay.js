import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const NewsList = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://your-news-api.com/news')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error(error));
  }, []);

  const renderNewsItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { newsItem: item })}>
        <View style={styles.newsItem}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const NewsDetails = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.newsTitle}>{newsItem.title}</Text>
      <Text style={styles.newsDescription}>{newsItem.description}</Text>
      <Text style={styles.newsContent}>{newsItem.content}</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Screen 2</Text>
      <Text style={styles.screenDescription}>This is the second screen.</Text>
    </View>
  );
};

export { NewsList, NewsDetails, Screen2 };

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
  },
  newsContent: {
    fontSize: 16,
    marginTop: 20,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  screenDescription: {
    fontSize: 16,
    color: '#666',
  },
};