import { Router } from "express";
import { createBiblioteca, deleteBibliotecabyId, getBibliotecaById, getBibliotecas, updateBibliotecabyId } from "../controllers/biblioteca.controllers";

const router = Router();

router.get("/", getBibliotecas);
router.get("/:id", getBibliotecaById);
router.patch("/update/:id", updateBibliotecabyId);
router.delete("/delete/:id", deleteBibliotecabyId);
router.post("/create", createBiblioteca);

export default router;