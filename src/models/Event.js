import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  type: String,
  uri: String,
  page: String,
  createdAt: { type: Date, default: Date.now }
});

export const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);