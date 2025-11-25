import * as materialRepository from "../repositories/material.repository.js"

interface MaterialData {
  name: string
  color: string
  unit: string
  price: number
  categoryId: number
}

export async function createMaterial(data: MaterialData ) {
  return await materialRepository.create(data)
}

export async function getAllMaterial() {
  return await materialRepository.findAll()
}

export async function getMaterialById(id: number) {
  return await materialRepository.findById(id)
}
export async function updateMaterial(id: number, data: MaterialData) {
  const material = await materialRepository.findById(id)
  if (!material) {
    return null
  }
  return await materialRepository.update(id, data)
}

export async function deleteMaterial(id: number) {
  const material = await materialRepository.findById(id)
  if (!material) {
    return null
  }
  return await materialRepository.remove(id)
}