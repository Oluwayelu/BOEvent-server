import jwt from 'jsonwebtoken';

export const signJwt = (payload) => jwt.sign(payload, process.env.JWT_SECRET);

export const verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    return err;
  }
};
