import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import router from "./router/router.js";

dotenv.config();
const app = express();
app.use(cors());
const db_url = process.env.MONGO_URI;
connection(db_url);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//*****************************
app.use("/", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
