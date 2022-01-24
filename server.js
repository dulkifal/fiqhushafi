// create an express server for next js with mongoose connection

const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const dev=process.env.NODE_ENV !== 'production'
const app=next({dev})
const handle=app.getRequestHandler()

app.prepare().then(()=>{
  const server=express()
  server.get('*',(req,res)=>{
    return handle(req,res)
  })
  server.listen(3000,(err)=>{
if(!err){
  console.log('server is running')
}else{
  console.log(err)
}
  })
}).catch(err=>{
  console.log(err)
  process.exit(1)
})