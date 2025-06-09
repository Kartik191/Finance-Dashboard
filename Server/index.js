import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient, ServerApiVersion } from "mongodb";
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*MONGOOSE SETUP */

// Routes
app.use("/transaction", transactionRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 8080
// console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
