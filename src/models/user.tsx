import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'],
  },
  fullName: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: [35, 'Should be less than 35 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

const User = models.User || model('User', userSchema);

export default User;
