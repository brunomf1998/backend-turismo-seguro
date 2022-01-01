const Establecimiento = require('../models/Establecimiento');
const ctrl = {};

ctrl.crearEstablecimiento = async (req, res) => {
  try {
    const { _id, nombre, direccion, ubiX, ubiY, usuarioAdmin, informacion } = req.body;
    const nuevoEstablecimiento = new Establecimiento({ _id, nombre, direccion, ubiX, ubiY, usuarioAdmin, informacion });
    const establecimientoCreado = await nuevoEstablecimiento.save();
    res.status(201).json(establecimientoCreado);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.obtenerEstablecimientos = async (req, res) => {
  const establecimientos = await Establecimiento.find();
	res.status(200).json(establecimientos);
}

ctrl.obtenerEstablecimientoPorId = async (req, res) => {
  const establecimiento = await Establecimiento.findById(req.params.establecimientoId);
  res.status(200).json(establecimiento);
}

module.exports = ctrl;