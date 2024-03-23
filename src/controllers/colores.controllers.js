import Color from "../database/model/colores.js";

export const agregarColor = async (req, res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje : "Color creado correctamente"
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud",
    });
  }
};

export const listarColores = async (req, res) => {
  try {
    const listaDeColores = await Color.find();
    res.status(200).json(listaDeColores);
  } catch (error) {
    res.status(404).json({
      mensaje: "no se pudo encontrar la lista de colores",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    const colorEncontrado = await Color.findById(req.params.id);
    if (colorEncontrado) {
      await Color.findByIdAndDelete(req.params.id);
      res.status(201).json({
        mensaje: "el color fué borrado correctamente",
      });
    } else {
      res.status(404).json({
        mensaje: "el color no existe o no pudo ser encontrado",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    const colorEncontrado = await Color.findById(req.params.id);
    if (colorEncontrado) {
      await Color.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "los datos del color fueron editados correctamente",
      });
    } else {
      res.status(404).json({
        mensaje: "el color no existe o no pudo ser encontrado",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud",
    });
  }
};

export const buscarColor = async (req, res) => {
  try {
    const colorEncontrado = await Color.findById(req.params.id);
    if (colorEncontrado) {
      res.status(200).json(colorEncontrado);
    } else {
      res.status(404).json({
        mensaje: "el color no existe o no pudo ser encontrado",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud",
    });
  }
};
