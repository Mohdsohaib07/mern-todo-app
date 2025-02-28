const express = require('express');
const {dbConnect} = require('./Db/dbConnect.js');
const {router}= require('./routes/todoRoutes.js');
const cors = require('cors');
const app= express();
require('dotenv').config();

dbConnect();
app.use(express.json());
app.use(cors({
    origin:"mern-todo-app-frontend-one.vercel.app", // Allow requests from all origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials (cookies) to be included
  }));
app.use(router);








app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`); 
});