import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import authUser from '../middlewares/auth.js';
import { resolvers, typeDefs } from '../graphql/index.js';

dotenv.config();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

// Datatbase connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db Connceted');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const port = process.env.PORT;

startStandaloneServer(server, {
  listen: { port },
  context: async ({ req, res }) => ({ req, res, authUser }),
})
  .then(({ url }) => console.log(`🚀  Server ready at: ${url}`))
  .catch((err) => console.error(err));
