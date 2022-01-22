import mongoose from 'mongoose'


mongoose.models = {};
let QSchema=new mongoose.Schema({
  q: 'string',
  a: 'string',
  p: 'string'
})
QSchema.index({q:"text",a:"text",p:"text"})

export const Q = mongoose.model('questions',QSchema
 );

