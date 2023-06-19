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
        {/* ANDROID:-  http://10.0.2.2:3000/news, http://192.168.0.103:3000/news */}
        const response = await axios.get('https://muhdaffawibi.com/news');
        const data = response.data;
        const pages = data.reduce((acc, item, index) => {
          if (index % 5 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, []);
        setPages(pages.slice(0, 4)); // Keep only first five pages
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
        height: 20,
        width: 20,
        borderRadius: 5,
        marginHorizontal: 2,
        backgroundColor: '#0C0C0C',
    },
    activeDot: {
        backgroundColor: 'blue',
    },
     
})

export default Screen2;