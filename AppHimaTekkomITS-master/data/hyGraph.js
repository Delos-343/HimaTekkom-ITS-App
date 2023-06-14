import React from 'react';
import { gql, useQuery } from '@apollo/client';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
        edges {
            node {
            author {
                name
                id
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
                url
            }
            }
        }
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};