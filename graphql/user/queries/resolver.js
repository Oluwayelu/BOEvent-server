import User from '../model.js';

const queries = {
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
