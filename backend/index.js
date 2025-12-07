import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import router from "./src/routes/notes.routes.js";
const app = express();

//App Config
dotenv.config();
const port = process.env.PORT || 4000;



// middlewares

app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Api WORKING");
});
app.use("/api/auth", authRoutes);
app.use("/api/notes/", router);

connectDB().then(
  app.listen(port, () => {
    console.log("Server Running at PORT NO:", port);
  })
);
