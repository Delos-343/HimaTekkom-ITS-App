import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { NEWS_REEL } from '../data/hyGraph';

const TestScreen = () => {

  const { loading, error, data } = useQuery(NEWS_REEL);

  console.log(data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <FlatList
      data={data.postsConnection.edges}
      keyExtractor={(item) => item.node.slug}
      renderItem={({ item }) => (
        <View>
          <Text>{item.node.title}</Text>
          <Text>{item.node.author.name}</Text>
          <Image source={{uri: item.node.featuredImage.url}} style={{height: 200, width: 200}}/>
          <Text>{item.node.excerpt}</Text>
        </View>
      )}
    />
  );
}
export default TestScreen;
