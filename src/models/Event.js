import {model, models, Schema} from "mongoose";

const EventSchema = new Schema({
  type: String,
  page: String,
  uri: String, // /Jeff | https://
}, {timestamps: true});

export const Event = models?.Event || model('Event', EventSchema);
