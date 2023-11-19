import {expressjwt} from 'express-jwt';

export const requireSignin = expressjwt({
  secret: process.env.JWT_KEY,
  algorithms: ['HS256'],
  requestProperty: 'user',
 });