import type express from "express"
import * as orcamentService from "../services/orcament.service.js"
import PDFDocument from "pdfkit"

export async function createOrcament(req: express.Request, res: express.Response) {
  const lista = req.body
  console.log(req.body)
  const Orcament = await orcamentService.createOrcament(lista)
  if (!Orcament) {
    return res.status(500).json({ message: "Unable to create orcament" })
  }

  // generate PDF with pdfkit and stream it in the response as an attachment
  const doc = new PDFDocument({ margin: 50 })

  // Set response headers for a PDF attachment
  const filename = `orcamento-${Orcament.id || Date.now()}.pdf`
  res.setHeader("Content-Type", "application/pdf")
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`)
  // Set status code to 201 (Created)
  res.statusCode = 201

  // Pipe PDF to response
  doc.pipe(res)

  // Título
  doc.fontSize(20).text("Orçamento", { align: "center" })
  doc.moveDown()

  doc.fontSize(12).text(`Orçamento ID: ${Orcament.id || "-"}`)
  doc.text(`Preço total: R$ ${Number(Orcament.totalPrice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`)
  doc.text(`Validade (dias): ${Orcament.validadeDays}`)
  doc.moveDown()

  // Products table
  doc.fontSize(14).text("Produtos:")
  doc.moveDown(0.5)

  if (Orcament.products && Orcament.products.length) {
    Orcament.products.forEach((p: any, idx: number) => {
      const productName = p.product?.name || `Produto #${p.productId}`
      doc.fontSize(12).text(`${idx + 1}. ${productName}`)
      doc.text(`   Largura: ${p.width}  Altura: ${p.height}  Quantidade: ${p.quantity}`)
      doc.text(`   Valor do item: R$ ${Number(p.totalPrice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`)
      doc.moveDown(0.25)
    })
  } else {
    doc.fontSize(12).text("Nenhum produto")
  }

  doc.moveDown()
  doc.fontSize(12).text(`Total geral: R$ ${Number(Orcament.totalPrice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, { align: "right" })

  doc.end()
}

export async function getAllOrcaments(req: express.Request, res: express.Response) {
  const Orcament = await orcamentService.getAllOrcament()
  res.status(200).json(Orcament)
}

export async function getOrcamentById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const Orcament = await orcamentService.getOrcamentById(Number(id))
  if (Orcament) {
    res.status(200).json(Orcament)
  } else {
    res.status(404).json({ message: "Orcament not found" })
  }
}
export async function updateOrcament(req: express.Request, res: express.Response) {
  // const { id } = req.params
  // const { productId } = req.body
  // const Orcament = await orcamentService.updateOrcament(Number(id), { productId:1,totalPrice:1  })
  // if (!Orcament) {
  //   return res.status(404).json({ message: "rcamentItem not found" })
  // }

  // return res.status(200).json(Orcament)
}

export async function deleteOrcament(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await orcamentService.deleteOrcament(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "Orcament not found" })
  }

  return res.status(204).send()
}
