import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'

import config from '../config'

const graphql_port = config.graphql_port as number

export default async function (
    app: Application,
    typeDefs: any,
    resolvers: any
) {
    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start()
    server.applyMiddleware({ app })
    await new Promise((r: any) => app.listen({ port: graphql_port }, r))
    console.log(`graphQL 🚀`)
}
