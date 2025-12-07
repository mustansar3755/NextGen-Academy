import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SECRET_EXPIRED_IN || "7d",
  });
};

// Register a new user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Required fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are required" });
    }

    // Check if email already exist
    const exist = await UserModel.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exist" });

    // Allowed admin emails list (from .env)
    const adminEmails = process.env.ADMIN_EMAILS.split(",");

    // Role automatically assigned
    const role = adminEmails.includes(email) ? "admin" : "user";

    // Create new user
    const user = await UserModel.create({
      name,
      email,
      password,
      role
    });

    res.status(201).json({
      message: "New User Created",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
