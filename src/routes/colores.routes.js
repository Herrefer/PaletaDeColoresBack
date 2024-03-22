import { Router } from "express";
import { agregarColor, borrarColor, buscarColor, editarColor, listarColores } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route('/colores').get(listarColores).post(agregarColor);
enrutador.route('/color/:id').get(buscarColor).delete(borrarColor).put(editarColor);

export default enrutador;