const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  _id: String,
  nombre: String,
  correo: { type: String, unique: true },
  contraseña: String
}, {
  timestamps: false,
  versionKey: false
});

usuarioSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

usuarioSchema.statics.comparePassword = async (passwordReceived, passwordEncrypted) => {
  return await bcrypt.compare(passwordReceived, passwordEncrypted);
}

module.exports = model('Usuario', usuarioSchema, 'usuarios');