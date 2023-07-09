import { types, mutationsType, queriesType } from './user/index.js';

const typeDefs = `
  ${types}

  type Query {
    ${queriesType}
  }

  type Mutation {
    ${mutationsType}
  }
`;

export default typeDefs;
