import * as User from "../repositories/user.repository.js"

export async function createUser(data: {Nome: string; Endereco: string; Email: string; Telefone: string }) {
  return await User.create(data)
}

export async function getAllUsers() {
  return await User.findAll()
}

export async function getUserById(id: number) {
  return await User.findById(id)
}
export async function updateUser(id: number, data: {Nome?: string; Endereco?: string; Email?: string; Telefone?: string }) {
  const user = await User.findById(id)
  if (!user) {
    return null
  }
  return await User.update(id, data)
}

export async function deleteUser(id: number) {
  const user = await User.findById(id)
  if (!user) {
    return null
  }
  return await User.remove(id)
}