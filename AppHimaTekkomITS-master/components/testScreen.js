import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { getPosts } from '../data/hyGraph';

const TestScreen = () => {

  const navigation = useNavigation();

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
      data={getPosts}
      renderItem={renderNewsItem}
      keyExtractor={(post) => post.id.toString()}
      style={{ padding: 10 }}
    />
  );
};

  export async function getStaticProps() {

    const posts = (await getPosts()) || []

    return {
        props: { posts }
    }
  }

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
