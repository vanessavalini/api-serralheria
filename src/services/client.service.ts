import * as clientRepository from "../repositories/client.repository.js"

export async function createClient(data: { name: string; CPF: string; endereco: string; phone: string }) {
  return await clientRepository.create(data)
}

export async function getAllClients() {
  return await clientRepository.findAll()
}

export async function getClientById(id: number) {
  return await clientRepository.findById(id)
} //rever se as funções estão certas