import type express from "express"
import * as orcamentItemService from "../services/orcamentItem.service.js"

export async function createOrcamentItem(req: express.Request, res: express.Response) {
  const { orcamentId, productId,  width, height, quantity, totalPrice } = req.body
  const OrcamentItem = await orcamentItemService.createOrcamentItem({ orcamentId, productId,  width, height, quantity, totalPrice })
  res.status(201).json(OrcamentItem)
}

export async function getAllOrcamentItems(req: express.Request, res: express.Response) {
  const OrcamentItem = await orcamentItemService.getAllOrcamentItem()
  res.status(200).json(OrcamentItem)
}

export async function getOrcamentItemById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const OrcamentItem = await orcamentItemService.getOrcamentItemById(Number(id))
  if (OrcamentItem) {
    res.status(200).json(OrcamentItem)
  } else {
    res.status(404).json({ message: "orcamentItem not found" })
  }
}
export async function updateOrcamentItem(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { orcamentId, productId,  width, height, quantity, totalPrice  } = req.body
  const OrcamentItem = await orcamentItemService.updateOrcamentItem(Number(id), { orcamentId, productId,  width, height, quantity, totalPrice  })
  if (!OrcamentItem) {
    return res.status(404).json({ message: "rcamentItem not found" })
  }

  return res.status(200).json(OrcamentItem)
}

export async function deleteOrcamentItem(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await orcamentItemService.deleteOrcamentItem(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "OrcamentItem not found" })
  }

  return res.status(204).send()
}
