import { userMutationsResolver, userQueriesResolver } from './user/index.js';
import { eventMutationsResolver, eventQueriesResolver } from './event/index.js';
import { bookingMutationsResolver, bookingQueriesResolver } from './bookings/index.js';

const resolvers = {
  Query: {
    ...userQueriesResolver,
    ...eventQueriesResolver,
    ...bookingQueriesResolver,
  },
  Mutation: {
    ...userMutationsResolver,
    ...eventMutationsResolver,
    ...bookingMutationsResolver,
  },
};

export default resolvers;
