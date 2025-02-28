const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    try{
        await mongoose.connect(`mongodb+srv://todoappuser:${process.env.PASSWORD}@cluster0.mxg05.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('database Connected');

    }
    catch(err){
        console.log(err);
        
    }
}

exports.dbConnect= dbConnect;