import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  visitDate: { type: String, required: true },
  visitTime: { type: String, required: true },
  userId: mongoose.SchemaTypes.ObjectId,
});

const ClientModel = mongoose.model('Client', ClientSchema);

export default ClientModel;
