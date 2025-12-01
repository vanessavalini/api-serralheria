import { Router } from "express"
import type express from "express"
import * as productController from "../controllers/products.controller.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateProductDto } from "../dtos/create-product.dto copy.js"
import { UpdateProductDto } from "../dtos/update-product.dto copy.js"

const router = Router()
router.post("/products", validateDto(CreateProductDto),productController.createProduct)
router.get("/products", productController.getAllProducts)
router.get("/products/:id", productController.getProductById)
router.put("/products/:id", validateDto(UpdateProductDto),productController.updateProduct)
router.delete("/products/:id", productController.deleteProduct)

export default router