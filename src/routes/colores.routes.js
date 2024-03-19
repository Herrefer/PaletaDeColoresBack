import { Router } from "express";

const enrutador = Router();

enrutador.route('/').get(listarColores).post(agregarColor);
enrutador.route('/:id').get(buscarColor).delete(borrarColor).put(editarColor);

export default enrutador;