import express from "express";
import multer from "multer";
import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";

// controllers
import * as userController from "../controllers/userController.js";

// middlewares
import validateUser from "../middlewares/validators/userValidator.js";
import hashPassword from "../middlewares/authentication/hashPassword.js";
import addOnlyIfNotAlreadyExists from "../middlewares/authentication/addOnlyIfNotAlreadyExists.js";
import getUserByEmailWithPasswordAndPassToNext from "../middlewares/authentication/getUserByEmailWithPasswordAndPassToNext.js";
import verifyPassword from "../middlewares/authentication/verifyPassword.js";
import verifyToken from "../middlewares/authentication/verifyToken.js";

const router = express.Router();
const upload = multer({ dest: "./public/uploads/" });

/**
 * USER ROUTING
 */
router.post("/login", getUserByEmailWithPasswordAndPassToNext, verifyPassword);
router.get("/logout", userController.logoutUser);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

/**
 * FILE UPLOAD ROUTING
 */
// route for uploading 1 or multiple files
router.post("/upload_files", upload.array("files"), (req, res) => {
  if (!req?.files.length)
    return res.status(400).send("bad request: empty body");

  req?.files.forEach(({ filename, originalname }) => {
    // fs.rename(oldPath, newPath, callback);
    // use uuid package to give a unique filename and avoid file to be replaced
    fs.rename(
      `./public/uploads/${filename}`,
      `./public/uploads/${uuidv4()}-${originalname}`,
      (err) => {
        if (err) throw err;
      }
    );
  });

  res.json({ message: "tous les fichiers ont correctement ete recupere!" });
});

/**
 * ADMIN ROUTING
 */
router.get("/users", userController.getAllUsers);
router.post(
  "/users",
  validateUser,
  addOnlyIfNotAlreadyExists,
  hashPassword,
  userController.postUser
);
router.delete("/users/:id", userController.deleteUser);

export default router;
