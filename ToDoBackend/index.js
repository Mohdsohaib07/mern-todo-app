const express = require('express');
const {dbConnect} = require('./Db/dbConnect.js');
const {router}= require('./routes/todoRoutes.js');
const cors = require('cors');
const app= express();

dbConnect();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials (cookies) to be included
  }));
app.use(router);








app.listen(8080,()=>{
    console.log('server started on port 8080'); 
});