import type express from "express"
import * as clientService from "../services/client.service.js"

export async function createClient(req: express.Request, res: express.Response) {
  const { name, CPF } = req.body
  const client = await clientService.createClient({ name, CPF }) //erro.
  res.status(201).json(client)
}

export async function getAllClients(req: express.Request, res: express.Response) {
  const clients = await clientService.getAllClients()
  res.status(200).json(clients)
}

export async function getClientById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const client = await clientService.getClientById(Number(id))
  if (client) {
    res.status(200).json(client)
  } else {
    res.status(404).json({ message: "Não foi achado o cliente" })
  }
}