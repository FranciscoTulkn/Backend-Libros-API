import { Router } from "express";
import { getlibros, createLibro, getLibroById, deleteLibroById, updateLibroById } from "../controllers/libro.controllers";


const router = Router();

router.get("/", getlibros);
router.get("/:id", getLibroById);
router.patch("/update/:id", updateLibroById);
router.delete("/delete/:id", deleteLibroById);
router.post("/create", createLibro);

export default router;
