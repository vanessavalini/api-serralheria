import type express from "express"
import * as orcamentService from "../services/orcament.service.js"

export async function createOrcament(req: express.Request, res: express.Response) {
  const lista = req.body
  console.log(req.body)
  const Orcament = await orcamentService.createOrcament(lista)
  res.status(201).json(Orcament)
}

export async function getAllOrcaments(req: express.Request, res: express.Response) {
  const Orcament = await orcamentService.getAllOrcament()
  res.status(200).json(Orcament)
}

export async function getOrcamentById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const Orcament = await orcamentService.getOrcamentById(Number(id))
  if (Orcament) {
    res.status(200).json(Orcament)
  } else {
    res.status(404).json({ message: "Orcament not found" })
  }
}
export async function updateOrcament(req: express.Request, res: express.Response) {
  // const { id } = req.params
  // const { productId } = req.body
  // const Orcament = await orcamentService.updateOrcament(Number(id), { productId:1,totalPrice:1  })
  // if (!Orcament) {
  //   return res.status(404).json({ message: "rcamentItem not found" })
  // }

  // return res.status(200).json(Orcament)
}

export async function deleteOrcament(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await orcamentService.deleteOrcament(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "Orcament not found" })
  }

  return res.status(204).send()
}
