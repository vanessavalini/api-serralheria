import orcamentItem from "../entities/orcamentItem.entity.js"

interface OrcamentItemData {
  orcamentId: number
  productId: number
  width: number
  height: number
  quantity: number
  totalPrice: number
}

export async function create(data: OrcamentItemData) {
  return orcamentItem.create({ data })
}

export async function findAll() {
  return orcamentItem.findMany()
}

export async function findById(id: number) {
  return orcamentItem.findUnique({ where: { id } })
}
export async function update(id: number, data: OrcamentItemData) {
  return orcamentItem.update({ where: { id }, data })
}

export async function remove(id: number) {
  return orcamentItem.delete({ where: { id } })
}