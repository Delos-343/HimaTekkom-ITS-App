import { request, gql } from 'graphql-request';
import React from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getNews = async() => {
    const query = gql`
        query Newss {
            newssConnection {
                edges {
                    node {
                        deskripsi
                        title
                        konten {
                            html
                        }
                        createdAt
                        image {
                            url
                        }
                        slug
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.newssConnection.edges;
}

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.postsConnection.edges;
  };

  export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.postsConnection.edges;
  };