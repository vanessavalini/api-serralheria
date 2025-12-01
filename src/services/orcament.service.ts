import { PrismaClient } from "@prisma/client"
import { Prisma } from "../../generated/prisma/client.js"
import * as orcamentRepository from "../repositories/orcament.repository.js"
import { evaluate } from "mathjs"
import product from "../entities/products.entity.js"
import * as productRepository from "../repositories/products.repository.js"
// import orcamentItem from "../entities/orcamentItem.entity.js"

export interface OrcamentItem {
  productId: number,
  width: number,
  height: number,
  quantity: number,
  totalPrice: number
}
export interface OrcamentData {
 clientId: number,
 items: OrcamentItem[]
}

export async function createOrcament(data: OrcamentData) {
  let totalPrice = 0
  const items : orcamentRepository.CreateOrcamentItemInput[] = []
  for (const orcamentProduct of data.items) {
    const product = await productRepository.findById(orcamentProduct.productId)
    if (!product){
      continue
    }

    let productPrice = 0
    for(const material of product?.materialProducts) {
        console.log("evaluating formula:", material.formula, "with L =", orcamentProduct.width, "and A =", orcamentProduct.height)
        const medida = evaluate(material.formula, { L: orcamentProduct.width, A: orcamentProduct.height }) 
        const materialPrice =(medida * material.material.unitPrice)
        console.log(`material ${material.material.name} price: ${materialPrice} (medida: ${medida} * unitPrice: ${material.material.unitPrice})`)
        productPrice += materialPrice
        console.log(`product totalPrice so far: ${productPrice}`)
    }

    productPrice = productPrice * orcamentProduct.quantity
    totalPrice += productPrice

    items.push({
        productId: orcamentProduct.productId,
        width: orcamentProduct.width,
        height: orcamentProduct.height,
        quantity: orcamentProduct.quantity,
        totalPrice: productPrice,
    })
  }
  const productOrcament = await orcamentRepository.create({
      totalPrice: totalPrice,
      validadeDays: 30,
      orcamentProduct: items,
      clientId: data.clientId
  })
  // const order = await PrismaClient.orcament.create({data: {}})
}

export async function getAllOrcament() {
  return await orcamentRepository.findAll()
}

export async function getOrcamentById(id: number) {
  return await orcamentRepository.findById(id)
}
export async function updateOrcament(id: number, data: OrcamentData) {
  const Orcament = await orcamentRepository.findById(id)
  if (!Orcament) {
    return null
  }
  return await orcamentRepository.update(id, data)
}

export async function deleteOrcament(id: number) {
  const Orcament = await orcamentRepository.findById(id)
  if (!Orcament) {
    return null
  }
  return await orcamentRepository.remove(id)
}