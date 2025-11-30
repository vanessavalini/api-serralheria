import * as orcamentItemRepository from "../repositories/orcamentItem.repository.js"

interface OrcamentItemData {
  orcamentId: number
  productId: number
  width: number
  height: number
  quantity: number
  totalPrice: number
}

export async function createOrcamentItem(data: OrcamentItemData ) {
  return await orcamentItemRepository.create(data)
}

export async function getAllOrcamentItem() {
  return await orcamentItemRepository.findAll()
}

export async function getOrcamentItemById(id: number) {
  return await orcamentItemRepository.findById(id)
}
export async function updateOrcamentItem(id: number, data: OrcamentItemData) {
  const OrcamentItem = await orcamentItemRepository.findById(id)
  if (!OrcamentItem) {
    return null
  }
  return await orcamentItemRepository.update(id, data)
}

export async function deleteOrcamentItem(id: number) {
  const OrcamentItem = await orcamentItemRepository.findById(id)
  if (!OrcamentItem) {
    return null
  }
  return await orcamentItemRepository.remove(id)
}