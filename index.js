const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// Middleware \\
app.use(cors())
app.use(express.json())

// Database \\
const uri = "mongodb+srv://Rockstar:<password>@rockstar-computers.at3yhx4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{

    }
    finally{}
}
run().catch(console.dir)

app.get('/', (req, res)=>{
    res.send('Rockstar Computers is ready')
})

app.listen(port, ()=>{
    console.log('Rockstar Computers is running on port', port)
})