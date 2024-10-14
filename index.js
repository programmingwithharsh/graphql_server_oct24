import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
type Book {
    title: String,
    author: String
}

type Query {
    books: [Book]
}`;

const books = [
    {
        title: "Graphql",
        author: "John"
    },
    {
        title: "Angular",
        author: "Sandeep"
    }
];

const resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`);