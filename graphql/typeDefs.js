import { userTypes, userMutationsType, userQueriesType } from './user/index.js';
import { eventTypes, eventMutationsType, eventQueriesType } from './event/index.js';

const typeDefs = `
  ${userTypes}
  ${eventTypes}

  type Query {
    ${userQueriesType}
    ${eventQueriesType}
  }

  type Mutation {
    ${userMutationsType}
    ${eventMutationsType}
  }
`;

export default typeDefs;
