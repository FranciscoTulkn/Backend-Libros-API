import { Request, Response } from "express";
import { LibroModel } from "../models/libro.models";

// Endpoint to get all libros
export const getlibros = async (req: Request, res: Response) => {

  try {
    const getAllLibros = await LibroModel.find({}); 
    
    res.json({ ok: true, libros: getAllLibros });
  } catch (error) {
    
    res.status(500).json({ok: false, msg: "Error al obtener los libros"});
  }
};

// Endpoint to get al libro by ID
export const getLibroById = async (req: Request, res: Response) => {

  const id = req.params.id;

  try {
    const getLibroById = await LibroModel.findById(id);

    res.json({ ok: true, libro: getLibroById });
  } catch (error) {
    
    res.status(500).json({ok: false, msg: "Error al obtener el libro"});
  }
}

// Enpoint to update libro
export const updateLibroById = async (req: Request, res: Response) => {

  const id = req.params.id;
  const payload = req.body;

  try {
    const updateLibroById = await LibroModel.findByIdAndUpdate(id, payload, {new: true});

    if (updateLibroById) {
      res.json({ ok: true, libro: updateLibroById });
    } else {
      res.status(404).json({ok: false, msg: "No se encontro el libro"});
    }
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al actualizar el libro"});
  }
};

// Endpoint to delete libro
export const deleteLibroById = async (req: Request, res: Response) => {

  const id = req.params.id;

  try {
    const deleteLibroById = await LibroModel.findByIdAndDelete(id);

    if (deleteLibroById) {
      res.json({ ok: true, msg: "Libro eliminado", libro: deleteLibroById });
    } else {
      res.status(404).json({ok: false, msg: "No se encontro el libro"});
    }
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al eliminar el libro"});
  }
};

// Endpoint to create libro
export const createLibro = async (req: Request, res: Response) => {

  try {
    const { body } = req;

    const newLibro = new LibroModel({...body});

    const saveLibro = await newLibro.save();

    res.json({ ok: true, libro: saveLibro, msg: "Libro creado" });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al crear el libro"});
  }
};

