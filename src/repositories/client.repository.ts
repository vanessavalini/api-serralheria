import client from "../entities/client.entity.js"

export async function create(data: { name: string; CPF: string; endereco: string; phone: string }){
     return client.create({ data })} //algum erro no data.

export async function findAll() {
  return client.findMany()
}

export async function findById(id: number) {
  return client.findUnique({ where: { id } })
}