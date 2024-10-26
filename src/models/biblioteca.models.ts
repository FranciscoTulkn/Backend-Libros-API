import { model, Schema } from "mongoose";


export interface IBiblioteca extends Document {
  id: string;
  nombre: string;
  direccion: string;
}

const bibliotecaSchema: Schema = new Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  }
});

export const BibliotecaModel = model<IBiblioteca>("Biblioteca", bibliotecaSchema);