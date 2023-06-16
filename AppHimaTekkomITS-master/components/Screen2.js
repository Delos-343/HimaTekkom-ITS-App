import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Screen2 = () => {
  
  const navigation = useNavigation();
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        const data = response.data;
        const pages = data.reduce((acc, item, index) => {
          if (index % 6 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, []);
        setPages(pages.slice(0, 5)); // Keep only first five pages
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

  const Pagination = ({ length, activePage, setActivePage }) => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      dots.push(
        <TouchableOpacity key={i} onPress={() => setActivePage(i)}>
          <View style={[styles.dot, activePage === i ? styles.activeDot : styles.inactiveDot]} />
        </TouchableOpacity>
      );
    }

    return <View style={styles.paginationContainer}>{dots}</View>
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={pages[activePage]}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ padding: 10 }}
      />
      <Pagination 
        length={pages.length} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
    </View>
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
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 2,
        backgroundColor: '#0C0C0C',
    },
    activeDot: {
        backgroundColor: 'blue',
    },
     
})

export default Screen2;
