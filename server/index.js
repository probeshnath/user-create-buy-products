const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware
app.use(express.json())
app.use(cors())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URL ;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    // database 
    const productsDB = await client.db("userProduct").collection('products')

    // create product
    app.post("/products", async (req,res)=>{
        const data = req.body;
        const result = await productsDB.insertOne(data)
        res.send(result)
    })





    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/",(req,res) =>{
    res.status(200).json({message: "Hello world"})
})

app.listen(port, ()=>{
    console.log(`port runing on the: ${port}`)
})