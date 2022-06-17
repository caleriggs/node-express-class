import express from "express";
import cors from "cors";
import v1 from "./v1/routes/v1.js";

const app = express();
const port = 1138;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("OK"));

app.use("/v1", v1);

app.listen(port, () =>
  console.log("App listening on : ", `http://localhost:${port}`)
);
