import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

/**
 * @params
 * InitialState
 * ctx
 */
export default function createApolloClient(initialState) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  return new ApolloClient({
    uri: process.env.grapqlUrl,
    fetch,
    cache: new InMemoryCache().restore(initialState), // For keeo the state on CSR after SSR
  })
}
