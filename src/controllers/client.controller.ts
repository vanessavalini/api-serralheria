import type express from "express"
import * as clientService from "../services/client.service.js"

export async function createClient(req: express.Request, res: express.Response) {
  const { name, CPF, phone, endereco } = req.body
  const client = await clientService.createClient({ name, CPF, phone, endereco })
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

export async function updateClient(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { name, CPF, phone, endereco } = req.body
  const client = await clientService.updateClient(Number(id), { name, CPF, phone, endereco })
  if (!client) {
    return res.status(404).json({ message: "Não foi achado o cliente" })
  }
  res.status(200).json(client)
}

export async function deleteClient(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await clientService.deleteClient(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "Não foi achado o cliente" })
  }
  res.status(204).send()
}