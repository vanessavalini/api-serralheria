import orcament from "../entities/orcament.entity.js"
import type { OrcamentData } from "../services/orcament.service.js"

export interface CreateOrcamentInput {
  totalPrice: number
  validadeDays: number
  orcamentProduct: CreateOrcamentItemInput[]
  clientId: number
}

export interface CreateOrcamentItemInput {
    productId:  number
    width:      number
    height:     number
    quantity:   number
    totalPrice: number
}

export async function create(data: CreateOrcamentInput) {

  return orcament.create({
    data: {
      totalPrice: data.totalPrice,
      validadeDays: data.validadeDays,
      products: {createMany: {data: data.orcamentProduct || []}},
      userId: 1,
      clientId: data.clientId
    }
    ,
    include: { products: true, user: true, client: true }
  })
}

export async function findAll() {
  return orcament.findMany({include: {products: true, user: true, client: true}})
}

export async function findById(id: number) {
  return orcament.findUnique({ where: { id }, include: {products: true, user: true, client: true} })
  }

export async function update(id: number, data: CreateOrcamentItemInput) {
  return orcament.update({ where: { id }, data })
}

export async function remove(id: number) {
  return orcament.delete({ where: { id } })
}