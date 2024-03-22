import { Router } from "express";
import { agregarColor, borrarColor, buscarColor, editarColor, listarColores } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route('/').get(listarColores).post(agregarColor);
enrutador.route('/:id').get(buscarColor).delete(borrarColor).put(editarColor);

export default enrutador;