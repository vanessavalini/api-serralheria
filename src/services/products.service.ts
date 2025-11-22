import * as productRepository from "../repositories/products.repository.js"

export async function createProduct(data: { name: string; color: string }) {
  return await productRepository.create(data)
}

export async function getAllProducts() {
  return await productRepository.findAll()
}

export async function getProductById(id: number) {
  return await productRepository.findById(id)
}
export async function updateProduct(id: number, data: { name?: string; color?: string }) {
  const user = await productRepository.findById(id)
  if (!user) {
    return null
  }
  return await productRepository.update(id, data)
}

export async function deleteProduct(id: number) {
  const user = await productRepository.findById(id)
  if (!user) {
    return null
  }
  return await productRepository.remove(id)
}