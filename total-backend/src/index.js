// require('dotenv').config({path : './env'})
import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config(
  {
    path : './.env'
  }
)

connectDB()


















// FIRST APPRAOCH

// import express from 'express';
// const app = express();

// (async ()=>{
//   try{
//     await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",()=>{
//       console.log("err",error);
//       throw error;
//     })
//     app.listen(process.env.PORT,()=>{
//       console.log(`app is listening on ${process.env.PORT}`)
//     })
//   }
//   catch(error){
//     console.error("ERROR",error);
//     throw err
//   }
// })()