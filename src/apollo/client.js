import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: '/.netlify/functions/index',
    cache: new InMemoryCache(),
    shouldBatch: true
  })