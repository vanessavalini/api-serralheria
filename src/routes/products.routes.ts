import { Router } from "express"
import type express from "express"
import * as productController from "../controllers/products.controller.js"

const router = Router()
router.post("/products", productController.createProduct)
router.get("/products", productController.getAllProducts)
router.get("/products/:id", productController.getProductById)
router.put("/products/:id", productController.updateProduct)
router.delete("/products/:id", productController.deleteProduct)

export default router