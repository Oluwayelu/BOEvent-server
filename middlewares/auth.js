import { User } from '../graphql/user/index.js';
import { verifyJwt } from '../utils/jwt.js';

const auth = async (req) => {
  try {
    let accessToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      accessToken = req.headers.authorization.replace('Bearer', '').trim();
    } else if (req.cookies.accessToken) {
      const { accessToken: token } = req.cookies;
      accessToken = token;
    }
    if (!accessToken) {
      throw new Error('No token found');
    }

    // validate the Access token
    const decoded = verifyJwt(accessToken, '');
    if (!decoded) {
      throw new Error('Invalid token');
    }
    console.log(decoded);

    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error('User does not exist');
    }
    return user;
  } catch (err) {
    throw new Error('An error occoured', err);
  }
};

export default auth;
