import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Text style={styles.goBackButtonText}>
          {'< KEMBALI KE BERITA'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        { item.title }
      </Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.date}>
        25 / 06 / 2023 { item.date }
      </Text>
      <Text style={styles.content}>
        { item.content }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  goBackButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#000080',
    width: '100%',
    paddingHorizontal: 10,
  },
  goBackButtonText: {
    color: '#f1f1f1',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 17,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#0c0c0c',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  date: {
    fontSize: 17,
    fontWeight: '600',
    color: '##0c0c0c',
    marginVertical: 25,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
});

export default NewsItem;
