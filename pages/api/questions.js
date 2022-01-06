// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose'
import { Q } from '../../utils/modals';





//const mongoose = require('mongoose');

export default async function handler(req, res) {
  mongoose.connect('mongodb://localhost:27017/fatwaweb');
  
  let ques=await Q.find({})
//  Q.insertMany([{q:'daafasdfaf',a:'asdfasdf',p:'asdfasdf'}]).then((err,res) => {console.log(res,err);})
  res.status(200).json(ques)
}
