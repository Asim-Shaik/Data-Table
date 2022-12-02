import express from "express";
const app = express();
import getController from "./controller/GetContoller.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/", getController);
const port = 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
