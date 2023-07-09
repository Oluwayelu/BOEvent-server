import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      fullname: { type: String },
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: { type: String },
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);
export default User;
