const express = require ('express')

const app = express()
const dotenv= require('dotenv').config();
const port= 5000;
const connectDb = require('./db/connection.js')
const router = require ('./routes/routes.js')


app.use (express.json())



//Main Route
app.use( '/api/v1/tasks' , router )


const start = async () =>{
try {
   //await connectDb(process.env.DATABASE_CONNECT);
    app.listen (port, (req, res) =>{
        console.log ('You are listening to port: ' ,port);
        })
} catch (error) {
    console.log("error");
}

}

start();