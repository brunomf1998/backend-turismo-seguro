const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
  comentario: String,
  fecha: Date,
  usuarioId: { ref: 'Usuario', type: String },
  establecimientoId: { ref: 'Establecimiento', type: String },
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Comentario', comentarioSchema, 'comentarios');