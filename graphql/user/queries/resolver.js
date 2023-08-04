import { GraphQLError } from 'graphql';

import User from '../model.js';

const queries = {
  loginSuccess: async (_, input, { req, authUser }) => {
    try {
      const user = authUser(req);

      if (!user) {
        throw new GraphQLError('Not authenticated');
      }

      return {
        message: 'User loggedin successfully',
        user,
      };
    } catch (err) {
      throw new GraphQLError('Error when trying to login', err);
    }
  },

  users: async () => {
    const users = await User.find({});

    return users;
  },
  user: async (_, args, { req, authUser }) => {
    const user = await authUser(req);
    return user;
  },
};

export default queries;
