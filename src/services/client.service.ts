import * as clientRepository from "../repositories/client.repository.js"

export async function createClient(data: { name: string; CPF: string; endereco: string; phone: string }) {
  return await clientRepository.create(data)
}

export async function getAllClients() {
  return await clientRepository.findAll()
}

export async function getClientById(id: number) {
  return await clientRepository.findById(id)
}

export async function updateClient(id: number, data: { name?: string; CPF: string; endereco: string; phone?: string }) {
  const client = await clientRepository.findById(id)
  if (!client) {
    return null
  }
  return await clientRepository.update(id, data)
}

export async function deleteClient(id: number) {
  const client = await clientRepository.findById(id)
  if (!client) {
    return null
  }
  return await clientRepository.remove(id)
}