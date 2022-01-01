const Favorito = require('../models/Favorito');
const ctrl = {};

ctrl.crearFavorito = async (req, res) => {
  try {
    const { _id, fecha, usuarioId, establecimientoId } = req.body;
    const nuevoFavorito = new Favorito({ _id, fecha, usuarioId, establecimientoId });
    const favoritoCreado = await nuevoFavorito.save();
    res.status(201).json(favoritoCreado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerFavoritos = async (req, res) => {
  const favoritos = await Favorito.find();
	res.status(200).json(favoritos);
}

ctrl.obtenerFavoritoPorId = async (req, res) => {
  const favorito = await Favorito.findById(req.params.favoritoId);
  res.status(200).json(favorito);
}

module.exports = ctrl;