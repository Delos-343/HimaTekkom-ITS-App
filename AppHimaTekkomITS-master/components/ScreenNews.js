import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.title}
      </Text>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, marginBottom: 10 }} />
      <Text style={{ fontSize: 14, color: 'gray', marginBottom: 10 }}>{item.date}</Text>
      <Text>{item.content}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        <Text style={{ color: 'blue' }}>Kembali ke Berita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default NewsItem;