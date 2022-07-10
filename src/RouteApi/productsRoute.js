import express from "express";
import {getProductById, createProduct, updateProductById, deleteProductById, listProducts} from "../Controllers/productsController.js";

const router = express.Router();

router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/:id", deleteProductById);
router.put("/:id", updateProductById);
router.get("/", listProducts);

export default router;