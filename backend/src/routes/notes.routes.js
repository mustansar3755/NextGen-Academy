import express from "express";
import {
  createNotes,
  deleteNotes,
  getNoteById,
  getNotes,
  updateNotes,
} from "../controllers/notes.controller.js";
import { adminauth } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.js";

const router = express.Router();

// Public Routes
router.get("/", getNotes);
router.get("/:id", getNoteById);

// Admin Only Routes ( To make sure that only admin can add,update,delete notes we add an middleware here and check if that is a admin or other user)
router.post("/add", adminauth, adminOnly, createNotes);
router.put("/:id", adminauth, adminOnly, updateNotes);
router.delete("/:id", adminauth, adminOnly, deleteNotes);


export default router