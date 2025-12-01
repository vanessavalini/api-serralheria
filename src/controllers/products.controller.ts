import type express from "express"
import * as productService from "../services/products.service.js"

export async function createProduct(req: express.Request, res: express.Response) {
  const { name, color, description, materialProducts} = req.body
  const product = await productService.createProduct({ name, color, description, materialProducts})
  res.status(201).json(product)
}

export async function getAllProducts(req: express.Request, res: express.Response) {
  const product = await productService.getAllProducts()
  res.status(200).json(product)
}

export async function getProductById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const product = await productService.getProductById(Number(id))
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ message: "product not found" })
  }
}
export async function updateProduct(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { name, color, description, materialProducts } = req.body
  const product = await productService.updateProduct(Number(id), { name, color, description, materialProducts: [] })
  if (!product) {
    return res.status(404).json({ message: "product not found" })
  }

  return res.status(200).json(product)
}

export async function deleteProduct(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await productService.deleteProduct(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "product not found" })
  }

  return res.status(204).send()
}
