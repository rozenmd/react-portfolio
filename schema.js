import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema.graphql'
import resolvers from './graphql/resolvers'

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
