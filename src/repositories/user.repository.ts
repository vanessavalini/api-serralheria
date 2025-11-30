import User from "../entities/user.entity.js"

export async function create(data: {Nome: string; Endereco: string; Email: string; Telefone: string }) {
  return User.create({ data })
}
export async function findAll() {
  return User.findMany()
}
export async function findById(id: number) {
  return User.findUnique({ where: { id } })
}
export async function update(id: number, data: {Nome?: string; Endereco?: string; Email?: string; Telefone?: string }) {
  return User.update({ where: { id }, data })
}

export async function remove(id: number) {
  return User.delete({ where: { id } })
}