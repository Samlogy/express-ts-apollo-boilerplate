import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        hello: String
    }
    type Mutation {
        testMutation: String!
    }
`
export default typeDefs
