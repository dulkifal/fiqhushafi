import mongoose from 'mongoose'
const connection = {}

let prod=process.env.NODE_ENV === 'production'

 async function dbConnect() {
    
  if(connection.isConnected) {
    return;
  }
   const db = await mongoose.connect(prod?process.env.mongo123:process.env.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  //connection.isConnected = db.connection[0].readyState;
  // console.log(connection.isConnected);
}

export default dbConnect ;