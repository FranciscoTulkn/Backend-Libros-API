import { Document, model, Schema } from "mongoose";


export interface Ilibro extends Document {
  isbn: string;
  titulo: string;
  editorial: string;
  ejemplares: number;
  estado: string;
  fechaPublicacion: Date;
  biblioteca_id: string;
  autor_id: string;
};

export const libroSchema: Schema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  editorial: {
    type: String,
    required: true
  },
  ejemplares: {
    type: Number,
    required: true
  },
  estado: {
    type: String, 
  },
  fechaPublicacion: {
    type: Date,
    required: true
  },
  biblioteca_id: {
    type: String,
  },
  autor_id: {
    type: String,
  }
});

export const LibroModel = model<Ilibro>("Libro", libroSchema);