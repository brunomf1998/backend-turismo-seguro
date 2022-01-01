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

ctrl.actualizarFavoritoPorId = async (req, res) => {
  try {
    const favoritoActualizado = await Favorito.findByIdAndUpdate(req.params.favoritoId, req.body, {
      new: true
    });
    res.status(200).json(favoritoActualizado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.eliminarFavoritoPorId = async (req, res) => {
  try {
    await Favorito.findByIdAndDelete(req.params.favoritoId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerFavoritosPorUsuario = async (req, res) => {
  const favoritos = await Favorito.find({ usuarioId: req.params.usuarioId });
  res.status(200).json(favoritos);
}

module.exports = ctrl;