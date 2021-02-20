import { ApolloServer, gql } from 'apollo-server';
import { bookStore } from '../data/books';

const typeDefs = gql`
    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
        title: String
        author: String
    }

    # Query to return an array of zero or more books
    type Query {
        books: [Book]
    }
`

const resolvers = {
    Query: {
        books: () => bookStore,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready to start at ${url}`);
})
