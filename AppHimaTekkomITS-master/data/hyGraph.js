import { gql } from '@apollo/client';

export const NEWS_REEL = gql`
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