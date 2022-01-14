import mongoose from 'mongoose'


mongoose.models = {};

export const Q = mongoose.model('questions',
 new mongoose.Schema({
  q: 'string',
  a: 'string',
  p: 'string'
}));