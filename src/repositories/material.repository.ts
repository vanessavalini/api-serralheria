import Material from "../entities/material.entity.js"

export async function create(data: { name: string; color: string; unit: string; price: number; categoryId: number }) {
  return Material.create({ data, include: { category: true } })
}

export async function findAll() {
  return Material.findMany({include: { category: true }})
}

export async function findById(id: number) {
  return Material.findUnique({ where: { id } })
}
export async function update(id: number, data: { name?: string; color?: string; unit?: string; price?: number; categoryId?: number }) {
  return Material.update({ where: { id }, data })
}

export async function remove(id: number) {
  return Material.delete({ where: { id } })
}