import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { connectToMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { IUser } from '@/types';
import mongoose from 'mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === 'POST') {
    if (!req.body) return res.status(400).json({ error: 'Data is missing' });
    const { fullName, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(409).json({ error: 'User already exists' });
    } else {
      if (password.length < 6) {
        res.status(409).json({ error: 'Password should be 6 characters long' });
      }
      const hashedPwd = await hash(password, 12);
      try {
        const data = await User.create({
          fullName,
          email,
          password: hashedPwd,
        });
        const user = {
          email: data.email,
          fullName: data.fullName,
          _id: data._id,
        };
        return res.status(201).json({
          success: true,
          user,
        });
      } catch (error) {
        if (error && error instanceof mongoose.Error.ValidationError) {
          for (let err in error.errors) {
            const msg = error.errors[err].message;
            return res.status(409).json({ error: msg });
          }
        }
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
