import React from 'react';
import { View, Text, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { NEWS_REEL } from '../data/hyGraph';

const TestScreen = () => {

  const { loading, error, data } = useQuery(NEWS_REEL);

  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Data:', data);


  if (loading) return <Text> Loading </Text>;
  if (error) return `Error! ${error.message}`;

  return (
    <View>
      {data.postsConnection.edges.map((index) => (
        <View key={index.node.slug}>

          <Text> {index.node.title} </Text>

          <Text> {index.node.author.name} </Text>

          <Image
            source={{uri: index.node.featuredImage.url}} style={{height: 200, width: 200}}
          />
          
          <Text> {index.node.excerpt} </Text>

        </View>
      ))}
    </View>
  );
}
export default TestScreen;
