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
    `
}
  