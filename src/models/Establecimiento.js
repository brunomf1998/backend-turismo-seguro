const { Schema, model } = require('mongoose');

const establecimientoSchema = new Schema({
  _id: String,
  nombre: String,
  direccion: String,
  ubiX: Number,
  ubiY: Number,
  usuarioAdmin: { ref: 'Usuario', type: String },
  informacion: String
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Establecimiento', establecimientoSchema, 'establecimientos');