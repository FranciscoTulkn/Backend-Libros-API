import { model, Schema } from "mongoose";


export interface IAutor extends Document {
  id: string;
  nombre: string;
  nacionalidad: string;
  libros: string[];
  bibliotecas: string[];
};

const autorSchema: Schema = new Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  nacionalidad: {
    type: String,
    required: true
  },
  libros: {
    type: [String],
  },
  bibliotecas: {
    type: [String],
    required: true
  }
});

export const AutorModel = model<IAutor>("Autor", autorSchema);