import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import enrutador from "./src/routes/colores.routes.js";
import "./src/database/database.js";
console.log("index funciona correctamente");

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("conectado al puerto " + app.get("port"));
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", enrutador);
