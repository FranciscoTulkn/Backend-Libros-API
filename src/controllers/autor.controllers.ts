import { Request, Response } from "express";
import { AutorModel } from "../models/autor.models";

// Endpoint to get all Autores
export const getAutores = async (req: Request, res: Response) => {

  try {
    const getAllAutores = await AutorModel.find({});

    res.json({ ok: true, autores: getAllAutores });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al obtener los autores"});
  }
};

// Endpoint to get Autres by ID
export const getAutorById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const getAutorById = await AutorModel.findById(id);

    res.json({ ok: true, autor: getAutorById });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al obtener el autor"});
  }
};

// Endpoint to update Autor
export const updateAutorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    const updateAutorById = await AutorModel.findByIdAndUpdate(id, payload, {new: true});

    if (updateAutorById) {
      res.json({ ok: true, autor: updateAutorById });
    } else {
      res.status(404).json({ok: false, msg: "No se encontro el autor"});
    }
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al actualizar el autor"});
  }  
};

// Endpoint to delete Autor
export const deleteAutorById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleteAutorById = await AutorModel.findByIdAndDelete(id);

    if (deleteAutorById) {
      res.json({ ok: true, msg: "Autor eliminado", autor: deleteAutorById });
    } else { 
      res.status(404).json({ok: false, msg: "No se encontro el autor"});
    }
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al eliminar el autor"});
  }
};

// Endpoint to create Autor
export const createAutor = async (req: Request, res: Response) => {

  try {
    const { body } = req;

    const newAutor = new AutorModel({...body});

    const saveAutor = await newAutor.save();

    res.json({ ok: true, autor: saveAutor, msg: "Autor creado" });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al crear el autor"});
  }
}