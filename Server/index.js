import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config()
const app = express();

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({"policy": "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({"extended": false}))
app.use(cors())


const uri = "mongodb+srv://shreyassharma1402:SWn1bb4rNXbA1UgO@finance-dashboard.axsrvdz.mongodb.net/?retryWrites=true&w=majority&appName=Finance-Dashboard";

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
    // Connect the client to the server    (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch (error){
    console.log(error);
  }finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();

