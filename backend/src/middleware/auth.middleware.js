import jwt from "jsonwebtoken";
import UserModel from "../models/User.model";

export const auth = async (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer"))
    return res.status(401).json({ message: "Token Not Provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) return res.status(401).json({ message: "User Not Found" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
