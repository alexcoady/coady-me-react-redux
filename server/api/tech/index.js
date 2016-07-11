// NPM dependencies
import mongoose, { Schema } from 'mongoose';

const techSchema = new Schema({
  name: String,
  slug: String,
  descriptiion: String,
  image: String
});

const Tech = mongoose.model('Tech', techSchema);

// Module defintion
export default {
  techSchema,
  Tech
};
