import {ApolloServer} from '@apollo/server'
import todoSchema from '../modules/todo/todo.schema.js'
import todoResolver from '../modules/todo/todo.resolver.js'


const apolloServer = new ApolloServer({
    typeDefs: todoSchema,
    resolvers: todoResolver
})

export default apolloServer