// backend/models/Role.js
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role: { type: String, required: true, unique: true },
  canEdit: { type: Boolean, default: false }
});

module.exports = mongoose.model('Role', roleSchema);
