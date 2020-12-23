const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Todo {
    title: String
    isDone: Boolean
  }

  type Query {
    todos: [Todo]
  }
`;

const todos = [
  {
    title: 'Apolloをはじめて触ってみる',
    isDone: true,
  },
  {
    title: 'TypeScriptで書いてみる',
    isDone: false,
  },
];

const resolvers = {
  Query: {
    todos: () => todos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server is ready at ${url}`));
