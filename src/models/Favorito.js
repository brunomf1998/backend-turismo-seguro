const { Schema, model } = require('mongoose');

const favoritoSchema = new Schema({
  fecha: Date,
  usuarioId: { ref: 'Usuario', type: String },
  establecimientoId: { ref: 'Establecimiento', type: String },
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Favorito', favoritoSchema, 'favoritos');