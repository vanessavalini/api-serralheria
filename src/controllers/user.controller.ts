import type express from "express"
import * as userService from "../services/user.service.js"

export async function createUser(req: express.Request, res: express.Response) {
  const {name, CNPJ, address, email, phone} = req.body
  const user = await userService.createRepository({name, CNPJ, address, email, phone})
  res.status(201).json(user)
}

export async function getAllUsers(req: express.Request, res: express.Response) {
  const user = await userService.getAllUsers()
  res.status(200).json(user)
}

export async function getUserById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const user = await userService.getUserById(Number(id))
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}
export async function updateUser(req: express.Request, res: express.Response) {
  const { id } = req.params
  const {name, CNPJ, address, email, phone} = req.body
  const user = await userService.updateUser(Number(id), {name, CNPJ, address, email, phone})
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(200).json(user)
}

export async function deleteUser(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await userService.deleteUser(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(204).send()
}
