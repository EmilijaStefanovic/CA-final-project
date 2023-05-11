import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, minLength: 8, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
