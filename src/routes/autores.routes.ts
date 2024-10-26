import { Router } from "express";
import { createAutor, deleteAutorById, getAutorById, getAutores, updateAutorById } from "../controllers/autor.controllers";

const router = Router();

router.get("/", getAutores);
router.get("/:id", getAutorById);
router.patch("/update/:id", updateAutorById);
router.delete("/delete/:id", deleteAutorById);
router.post("/create", createAutor);

export default router;