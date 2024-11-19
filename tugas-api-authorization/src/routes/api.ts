import express from "express";

import uploadMiddleware from "../middlewares/upload.middleware";
import uploadController from "../controllers/upload.controller";
import productsController from "../controllers/products.controller";
import categoryController from "../controllers/category.controller";
import authController from "../controllers/auth.controllers";
import authMiddleware from "../middlewares/auth.middleware";
import rbacMiddleware from "../middlewares/rbac.middleware";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/category", categoryController.findAll); //works
router.post("/category", categoryController.create); //works
router.get("/category/:id", categoryController.findOne); //works
router.put("/category/:id", categoryController.update); //works
router.delete("/category/:id", categoryController.delete); //works

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post("/auth/me",
    [authMiddleware, rbacMiddleware(["admin"])],
    authController.me
  );
// router.put("/auth/update-profile", authMiddleware, authController.updateProfile);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
