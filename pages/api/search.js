// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect';
import Note from '../../utils/Note';
dbConnect();


 
//const mongoose = require('mongoose');

export default async function handler(req, res) {
  
  let ques=await Note.find({$text: {$search: req.body.s}})
  console.log(ques)
//  Q.insertMany([{q:'daafasdfaf',a:'asdfasdf',p:'asdfasdf'}]).then((err,res) => {console.log(res,err);})
  res.status(200).json(ques)
}