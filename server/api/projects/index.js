// NPM dependencies
import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const projectSchema = new Schema({
  name: String,
  slug: String,
  url: String,
  descriptiion: String,
  images: {},
  tech: [{type: ObjectId, ref: 'Tech'}],
  agency: {
    type: ObjectId,
    ref: 'Agency'
  },
  client: {
    type: ObjectId,
    ref: 'Client'
  }
});

const Project = mongoose.model('Project', projectSchema);

// Module defintion
export {
  projectSchema,
  Project
};
