import React from 'react';
import { gql } from '@apollo/client';

const NEWS_REEL = gql`
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