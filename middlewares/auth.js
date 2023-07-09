import jwt from 'jsonwebtoken';

import { User } from '../graphql/user/index.js';
import { verifyJwt } from '../utils/jwt.js';

export const getTokenPayload = (token) => jwt.verify(token, process.env.JWT_SECRET);

export const getUserId = (req, authToken) => {
  if (req) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
      const token = authHeader.replace('Bearer', '').trim();

      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('Not authenticated');
};
export const authUser = async (req) => {
  try {
    let accessToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      accessToken = req.headers.authorization.replace('Bearer', '').trim();
    } else if (req.cookies.accessToken) {
      const { accessToken: token } = req.cookies;
      accessToken = token;
    }

    if (!accessToken) return false;

    // validate the Access token
    const decoded = verifyJwt(accessToken, '');
    if (!decoded) return false;

    const user = await User.findById(decoded.userId);

    if (!user) {
      console.error('this user no longer eist');
    }
    return user;
  } catch (err) {
    throw new Error('this user no longer eist');
  }
};
