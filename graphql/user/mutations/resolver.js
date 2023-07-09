import bcrypt from 'bcryptjs';
import { GraphQLError } from 'graphql';

import User from '../model.js';
import { signJwt } from '../../../utils/jwt.js';

const mutations = {
  register: async (_, { email, password, firstname, lastname }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new GraphQLError('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name: {
        firstname,
        lastname,
        fullname: `${firstname} ${lastname}`,
      },
      email,
      password: hashedPassword,
    });
    const result = await user.save();

    return result;
  },

  login: async (_, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new GraphQLError('Incorrct User / Password');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new GraphQLError('Incorrct User / Password');
    }
    const token = signJwt({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return {
      id: user.id,
      token: token,
    };
  },

  updateUser: async (_, { firstname, lastname }, { req, authUser }) => {
    try {
      const user = await authUser(req);

      user.name.firstname = firstname;
      user.name.lastname = lastname;
      user.name.fullname = `${firstname && firstname} ${lastname && lastname}`;

      await user.save();

      return {
        message: 'User updated successfully',
        user,
      };
    } catch (err) {
      throw new GraphQLError('Update was not successfull', err);
    }
  },

  follow: async (_, { userId }, { req, authUser }) => {
    try {
      const user = await authUser(req);
      let followingUser = await User.findById(userId);

      if (!followingUser) {
        throw new GraphQLError('User does not exist');
      }

      await User.findByIdAndUpdate(user.id, { $addToSet: { following: followingUser } });
      followingUser = await User.findByIdAndUpdate(followingUser.id, { $addToSet: { followers: user.id } });

      return {
        message: 'User followed successfully',
        user: followingUser,
      };
    } catch (err) {
      throw new GraphQLError('Error following user', err);
    }
  },

  unFollow: async (_, { userId }, { req, authUser }) => {
    try {
      const user = await authUser(req);
      let followingUser = await User.findById(userId);

      if (!followingUser) {
        throw new GraphQLError('User does not exist');
      }

      await User.findByIdAndUpdate(user.id, { $pull: { following: followingUser } });
      followingUser = await User.findByIdAndUpdate(followingUser.id, { $pull: { followers: user.id } });

      return {
        message: 'User unfollowed successfully',
        user: followingUser,
      };
    } catch (err) {
      throw new GraphQLError('Error unfollowing user', err);
    }
  },
};

export default mutations;
