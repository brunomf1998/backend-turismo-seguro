const Usuario = require('../models/Usuario');
const Comentario = require('../models/Comentario');
const Favorito = require('../models/Favorito')
const ctrl = {};

ctrl.crearUsuario = async (req, res) => {
  try {
    const { _id, nombre, correo, contraseña } = req.body;
    const nuevoUsuario = new Usuario({ _id, nombre, correo, contraseña: await Usuario.encryptPassword(contraseña) });
    const usuarioCreado = await nuevoUsuario.save();
    res.status(201).json(usuarioCreado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
	res.status(200).json(usuarios);
}

ctrl.obtenerUsuarioPorId = async (req, res) => {
  const usuario = await Usuario.findById(req.params.usuarioId);
  res.status(200).json(usuario);
}

ctrl.actualizarUsuarioPorId = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.usuarioId, req.body, {
      new: true
    });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.eliminarUsuarioPorId = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.usuarioId);
    await Comentario.deleteMany({ usuarioId: req.params.usuarioId })
    await Favorito.deleteMany({ usuarioId: req.params.usuarioId })
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.logIn = async (req, res) => {
  const usuarioEncontrado = await Usuario.findOne({ correo: req.body.correo });
  if (!usuarioEncontrado) return res.status(200).json({ message: 'Correo incorrecto', token: '1' });
  const matchPassword = await Usuario.comparePassword(req.body.contraseña, usuarioEncontrado.contraseña);
  if (!matchPassword) return res.status(200).json({ message: 'Contraseña incorrecta', token: '2' });
  res.status(200).json({ message: 'Inicio de sesión correcto', token: '0', usuario: usuarioEncontrado });
}

module.exports = ctrl;