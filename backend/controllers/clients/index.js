import ClientModel from '../../db/ClientModel.js';
import mongoose from 'mongoose';

export async function createNewClient(req, res) {
  try {
    const { email, fullName, visitDate, userId } = req.body;
    const newClient = {
      email: '',
      fullName: '',
      visitDate: '',
      userId: new mongoose.Types.ObjectId(),
    };

    if (userId && email && fullName && visitDate) {
      (newClient.email = email),
        (newClient.fullName = fullName),
        (newClient.visitDate = visitDate),
        (newClient.userId = new mongoose.Types.ObjectId(userId));
    }

    const client = await ClientModel.create(newClient);
    res.json(client);
  } catch (error) {
    res.status(500).json({
      message: `Invalid user Id or info: userId - ${userId} body - ${email}, ${fullName}, ${visitDate}`,
    });
  }
}

export async function deleteClientById(req, res) {
  try {
    const { id } = req.params;
    const resp = await ClientModel.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllClientsById(req, res) {
  try {
    const { id } = req.params;
    const clients = await ClientModel.find({ userId: id }, { __v: false });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
