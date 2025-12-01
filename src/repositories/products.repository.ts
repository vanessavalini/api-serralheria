import Product from "../entities/products.entity.js"

export async function create(data: { name: string; color: string, description?: string, materialProducts?: {productId: number, materialId: number, formula: string}[] }) {
  return Product.create({ data: {
    materialProducts: {createMany: {data: data.materialProducts || []}},
    name: data.name,
    color: data.color,
    description: data.description ??  ""
  } })
}

export async function findAll() {
  return Product.findMany({include: {materialProducts: {include: {material: true} }}})
}

export async function findById(id: number) {
  return Product.findUnique({ where: { id }, include: {materialProducts: {include: {material: true} }}})
}
export async function update(id: number, data: { name?: string; color?: string, description?: string }) {
  return Product.update({ where: { id }, data })
}

export async function remove(id: number) {
  return Product.delete({ where: { id } })
}