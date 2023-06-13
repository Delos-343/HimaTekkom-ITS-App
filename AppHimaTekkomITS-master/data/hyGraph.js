

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
  