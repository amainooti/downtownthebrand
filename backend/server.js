
const express = require("express");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose")

const port = process.env.port || 8080;



app.get("/", (req, res)=>{
    res.send(`<h1>Server is running on port:${port} </h1>`)
})

const conn_str = "mongodb+srv://downtownthebrand:Reginald476.@cluster0.9phko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(
conn_str,
{
useNewUrlParser: true,
useUnifiedTopology: true
},(err) => {
    if (err) {
    console.log("error in connection");
    } else {
    console.log("mongodb is connected");
}});
//create a server object:


app.listen(port, () => {
    console.log(`starting the server on port:${port} `);
});