import { userTypes, userMutationsType, userQueriesType } from './user/index.js';
import { eventTypes, eventMutationsType, eventQueriesType } from './event/index.js';
import { bookingTypes, bookingMutationsType, bookingQueriesType } from './bookings/index.js';

const typeDefs = `
  ${userTypes}
  ${eventTypes}
  ${bookingTypes}

  type Query {
    ${userQueriesType}
    ${eventQueriesType}
    ${bookingQueriesType}
  }

  type Mutation {
    ${userMutationsType}
    ${eventMutationsType}
    ${bookingMutationsType}
  }
`;

export default typeDefs;
