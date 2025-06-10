import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, transactions } from "./data/data.js";
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'
import Transaction from "./models/Transaction.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/kpi", kpiRoutes);
app.use("/transaction", transactionRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 8080
// console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));
