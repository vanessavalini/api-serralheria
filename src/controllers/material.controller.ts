import type express from "express"
import * as materialService from "../services/material.service.js"

export async function createMaterial(req: express.Request, res: express.Response) {
  const { name, color, unit, price, categoryId } = req.body
  const Material = await materialService.createMaterial({ name, color, unit, price, categoryId })
  res.status(201).json(Material)
}

export async function getAllMaterials(req: express.Request, res: express.Response) {
  const Material = await materialService.getAllMaterial()
  res.status(200).json(Material)
}

export async function getMaterialById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const Material = await materialService.getMaterialById(Number(id))
  if (Material) {
    res.status(200).json(Material)
  } else {
    res.status(404).json({ message: "Material not found" })
  }
}
export async function updateMaterial(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { name, color, unit, price, categoryId } = req.body
  const Material = await materialService.updateMaterial(Number(id), { name, color, unit, price, categoryId })
  if (!Material) {
    return res.status(404).json({ message: "Material not found" })
  }

  return res.status(200).json(Material)
}

export async function deleteMaterial(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await materialService.deleteMaterial(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "Material not found" })
  }

  return res.status(204).send()
}
