import { userMutationsResolver, userQueriesResolver } from './user/index.js';
import { eventMutationsResolver, eventQueriesResolver } from './event/index.js';

const resolvers = {
  Query: {
    ...userQueriesResolver,
    ...eventQueriesResolver,
  },
  Mutation: {
    ...userMutationsResolver,
    ...eventMutationsResolver,
  },
};

export default resolvers;
