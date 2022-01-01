const Comentario = require('../models/Comentario');
const ctrl = {};

ctrl.crearComentario = async (req, res) => {
  try {
    const { _id, comentario, fecha, usuarioId, establecimientoId } = req.body;
    const nuevoComentario = new Comentario({ _id, comentario, fecha, usuarioId, establecimientoId });
    const comentarioCreado = await nuevoComentario.save();
    res.status(201).json(comentarioCreado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerComentarios = async (req, res) => {
  const comentarios = await Comentario.find();
	res.status(200).json(comentarios);
}

ctrl.obtenerComentarioPorId = async (req, res) => {
  const comentario = await Comentario.findById(req.params.comentarioId);
  res.status(200).json(comentario);
}

ctrl.actualizarComentarioPorId = async (req, res) => {
  try {
    const comentarioActualizado = await Comentario.findByIdAndUpdate(req.params.comentarioId, req.body, {
      new: true
    });
    res.status(200).json(comentarioActualizado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.eliminarComentarioPorId = async (req, res) => {
  try {
    await Comentario.findByIdAndDelete(req.params.comentarioId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerComentariosPorUsuario = async (req, res) => {
  const comentarios = await Comentario.find({ usuarioId: req.params.usuarioId });
  res.status(200).json(comentarios);
}

module.exports = ctrl;