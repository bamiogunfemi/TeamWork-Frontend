import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();
const secret = process.env.JWT_KEY;

const generateToken = ({ id, email, isAdmin }) => {
  const token = jwt.sign({ id, email, isAdmin }, secret, { expiresIn: '24h' });
  return `Bearer ${token}`;
};

export default { generateToken };
