import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const getPostsQuery = gql`
  query getPosts {
    posts {
      title
      content
      featuredImage {
        url
      }
      createdAt
    }
  }
`;

const TestScreen = () => {

  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.query(getPostsQuery).then((result) => {
      setPosts(result.data.posts);
    });
  }, []);

  const renderNewsItem = ({ posts, post }) => {

    console.log(post);

    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsItem', { post })}>
        {posts.map((post) =>
          <View style={styles.container}>
            <Image
              source={{ uri: post.featuredImage.url }}
              style={{ width: 100, height: 100, marginRight: 10 }}
            />
            <View style={styles.newsreel}>
              <Text style={styles.title}>
                {post.title}
              </Text>
              <Text style={styles.date}>
                {moment(post.createdAt).format("MM/DD/YYYY")}
              </Text>
              <Text numberOfLines={3}>{post.content}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderNewsItem}
      keyExtractor={(post) => post.id.toString()}
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
    paddingVertical: '.5rem',
}
})

export default TestScreen;
