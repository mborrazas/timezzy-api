import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/mongo";
import { router } from "./routes";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(express.json());
//app.use(router);
db().then(() => console.log("DB connection already"));
app.listen(PORT, () => console.log(`App ready in port: ${PORT}`));