import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    uri: 'http://localhost:3000/api/graphql',
    fetch,
    cache: new InMemoryCache().restore(initialState), // For keeo the state on CSR after SSR
  })
}