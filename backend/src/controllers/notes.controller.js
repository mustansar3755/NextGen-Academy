import NotesModel from "../models/notes.model.js";

// Create New Note
const createNotes = async (req, res) => {
  try {
    const note = await NotesModel.create(req.body);

    res.status(201).json({
      message: "Note added Successfully !",
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      message: " Error Creating New Note !",
      success: false,
      error: error.message,
    });
  }
};

// Get All Notes (Public)
const getNotes = async (req, res) => {
  try {
    const notes = await NotesModel.find().sort({ createdAt: -1 });
    res.status(201).json({
      count: notes.length,
      success: true,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      message: " Error Getting  Notes !",
      success: false,
      error: error.message,
    });
  }
};

// Get Notes By ID
const getNoteById = async (req, res) => {
  try {
    const note = await NotesModel.findById(req.params.id);
    if (!note)
      return res.status(404).json({
        success: false,
        message: "Notes Not Found",
      });
    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(501).json({
      message: " Failed to fetch notes.",
      success: false,
      error: error.message,
    });
  }
};

// Update Notes Only By Admin
const updateNotes = async (req, res) => {
  try {
    const updatedNotes = await NotesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedNotes)
      return res.status(404).json({
        success: false,
        message: "Note Not found",
      });
    // Actual Data
    res.status(200).json({
      success: true,
      message: "Notes Updates Successfully !",
      data: updatedNotes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update notes",
      error: error.message,
    });
  }
};

// Deletw Notes Only By Admin
const deleteNotes = async (req, res) => {
  try {
    const deletedNotes = await NotesModel.findByIdAndDelete(req.params.id);

    if (!deletedNotes)
      return res.status(404).json({
        success: false,
        message: "Note Not found",
      });
    // Actual Data
    res.status(200).json({
      success: true,
      message: "Notes Deleted Successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete notes",
      error: error.message,
    });
  }
};

export  { createNotes, getNotes, getNoteById, updateNotes, deleteNotes };
