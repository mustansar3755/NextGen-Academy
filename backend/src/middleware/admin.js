export const adminOnly = (req, res, next) => {
  if (!res.user) return res.status(401).json({ message: "Not Authenticated" });
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin Access Required" });
  next();
};
