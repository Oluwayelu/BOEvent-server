import { mutationsResolver, queriesResolver } from './user/index.js';

const resolvers = {
  Query: {
    ...queriesResolver,
  },
  Mutation: {
    ...mutationsResolver,
  },
};

export default resolvers;
