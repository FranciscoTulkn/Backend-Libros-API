import { Request, Response } from "express";
import { BibliotecaModel } from "../models/biblioteca.models";


// Endpoint get to all Bibliotecas
export const getBibliotecas = async (req: Request, res: Response) => {
  try {
    const getAllBiblitecas = await BibliotecaModel.find({});

    res.json({ ok: true, bibliotecas: getAllBiblitecas });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al obtener las bibliotecas"});
  }
};

// Endpoint get to one Biblioteca
export const getBibliotecaById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const getBibliotecaById = await BibliotecaModel.findById(id);

    res.json({ ok: true, biblioteca: getBibliotecaById });
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al obtener la biblioteca"});
    
  }
}

// Endpoint to update Biblioteca
export const updateBibliotecabyId = async (req: Request, res: Response) => {
  const  id = req.params.id;
  const payload = req.body;

  try {
    const updateBibliotecaById = await BibliotecaModel.findByIdAndUpdate(id, payload, {new: true});

    if (updateBibliotecaById){
      res.json({ ok: true, biblioteca: updateBibliotecaById });
    }else {
      res.status(404).json({ok: false, msg: "No se encontro la biblioteca"});
    }
  } catch (error) {
    res.status(500).json({ok: false, msg: "Error al actualizar la biblioteca"});
  }
};

// Endpoint to delete Biblioteca
export const deleteBibliotecabyId = async (req: Request, res: Response) => {
  const id = req.params.id; 

  try {
    const deleteBibliotecaById = await BibliotecaModel.findByIdAndDelete(id);

    if (deleteBibliotecaById){
      res.json({ ok: true, msg: "Biblioteca eliminada", biblioteca: deleteBibliotecaById });
    }else {
      res.status(404).json({ok: false, msg: "No se encontro la biblioteca"});
    }
  } catch (error) {
    res.json({ok: false, msg: "Error al eliminar la biblioteca"});
  }
}

// Endpoint to create Biblioteca
export const createBiblioteca = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const newBiblioteca = new BibliotecaModel({...body});

    const saveBiblioteca = await newBiblioteca.save();

    res.json({ ok: true, biblioteca: saveBiblioteca, msg: "Biblioteca creada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: "Error al crear la biblioteca" });
  }
}