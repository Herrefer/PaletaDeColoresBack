import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  nombreColor: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  codigoColor: {
    type: String,
    required: true,
    unique: true,
    minLength: 7,
    maxLength: 7,
  },
});

const Color = mongoose.model('color', colorSchema);

export default Color