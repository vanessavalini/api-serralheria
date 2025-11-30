import Client from "../entities/client.entity.js"

export async function create(data: { name: string; CPF: string; endereco: string; phone: string,}){
     return Client.create({ data })}

export async function findAll() {
  return Client.findMany()
}

export async function findById(id: number) {
  return Client.findUnique({ where: { id } })
}