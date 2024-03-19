import express from "express";
import 'dotenv/config'
import morgan from "morgan";
import cors from "cors";


console.log("index funciona correctamente");

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("conectado al puerto " + app.get("port"));
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
