import { PrismaClient } from "../generated/prisma/client"
const prisma = new PrismaClient()
async function createCategories() {
  const result = await prisma.$executeRaw`INSERT INTO "MaterialCategory" ("name") VALUES ('Perfil'),('Vidro'),('Acessório') ON CONFLICT DO NOTHING;`
  console.log({ result })
}

async function createProducts() {
  const product = await prisma.product.createMany({
    data: [
      { name: "Janela 2 folhas", color: "Branco", description: "Janela de correr com 2 folhas na cor branca" },
      { name: "Porta de giro", color: "Branco", description: "Porta de giro c/ vidro linha suprema na cor branca" },
    ]
  })
  console.log({ product })
}

async function createMaterial() {
  const material = await prisma.material.createMany({
    data: [
      { code: "SUP-TRILHO", name: "PERFIL_SUP_TRILHO", color: "Branco", unit: "metro", unitPrice: 25.5, categoryId: 1 },
      { code: "SUP-GUIA", name: "Guia superior suprema", color: "Branco", unit: "m", unitPrice: 31.4, categoryId: 1 },
      { code: "SUP-BAT", name: "Batente lateral suprema", color: "Branco", unit: "m", unitPrice: 27.2, categoryId: 1 },
      { code: "SUP-FOLHA", name: "Perfil folha suprema", color: "Branco", unit: "m", unitPrice: 29.9, categoryId: 1 },
      { code: "SUP-PG", name: "Perfil porta giro suprema", color: "Branco", unit: "m", unitPrice: 36.2, categoryId: 1 },
      { code: "TRAV-PORT", name: "Perfil Travessa porta de giro", color: "Branco", unit: "m", unitPrice: 33.8, categoryId: 1 },
      { code: "SUP-BORR-JAN", name: "Borracha vedação janela", color: "Branco", unit: "m", unitPrice: 4.2, categoryId: 3 },
      { code: "SUP-BORR-POR", name: "Borracha vedação porta", color: "Branco", unit: "m", unitPrice: 5.3, categoryId: 3 },
      { code: "SUP-ROLD", name: "Roldana suprema", color: "", unit: "pc", unitPrice: 8.9, categoryId: 3 },
      { code: "SUP-FECH-J", name: "Fecho janela correr", color: "", unit: "pc", unitPrice: 12.8, categoryId: 3 },
      { code: "SUP-GUIA-LAT", name: "Guia lateral", color: "", unit: "pc", unitPrice: 3.2, categoryId: 3 },
      { code: "SUP-DOBRA", name: "Dobradiça suprema", color: "", unit: "pc", unitPrice: 13.5, categoryId: 3 },
      { code: "SUP-FECH-P", name: "Fechadura porta suprema", color: "", unit: "pc", unitPrice: 28.9, categoryId: 3 },
      { code: "SUP-PUX", name: "Puxador suprema", color: "", unit: "pc", unitPrice: 19.90, categoryId: 3 },
      { code: "PARAF", name: "Parafuso porta suprema", color: "", unit: "pc", unitPrice: 19.90, categoryId: 3 },
      { code: "VID4-INC", name: "Vidro 4mm incolor", color: "", unit: "m2", unitPrice: 0.50, categoryId: 2 },
      { code: "VID8-TEMP", name: "Vidro 8mm temperado", color: "", unit: "m2", unitPrice: 188.0, categoryId: 2 },
    ],
  })
  console.log({ material })
}

async function createMaterialProducts() {
  const materialProduct = await prisma.materialProduct.createMany({
    data: [
      { productId: 1, materialId: 5, formula: "(2*L + 2*A)/1000" },
      { productId: 1, materialId: 6, formula: "L/1000" },
      { productId: 1, materialId: 8, formula: "(2*(A+L))/1000" },
      { productId: 1, materialId: 16, formula: "((L-10)*(A-10))/1000" },
      { productId: 1, materialId: 5, formula: "(2*L + 2*A)/1000" },
      { productId: 1, materialId: 11, formula: "3" },
      { productId: 1, materialId: 12, formula: "1" },
      { productId: 1, materialId: 13, formula: "1" },
      { productId: 1, materialId: 14, formula: "12" },
      { productId: 2, materialId: 1, formula: "L/1000" },
      { productId: 2, materialId: 2, formula: "L/1000" },
      { productId: 2, materialId: 1, formula: "L/1000" },
      { productId: 2, materialId: 3, formula: "(2*A)/1000" },
      { productId: 2, materialId: 4, formula: "(4*A + 4*(L/2))/1000"},
      { productId: 2, materialId: 7, formula: "(2*(A+L))/1000" },
      { productId: 2, materialId: 15, formula: "((L/2 - 30)+(A - 40))/1000" },
      { productId: 2, materialId: 9, formula: "4" },
      { productId: 2, materialId: 10, formula: "1" },
      { productId: 2, materialId: 11, formula: "2" },
      { productId: 2, materialId: 14, formula: "12" },
  ]
  })}


  createCategories().then(() => createProducts()).then(() => createMaterial()).then(() => createMaterialProducts())
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

async function createUser() {
  const user = await prisma.user.create({
    data: { name: "Gurus Serralheria", CNPJ: "08095410/0001-75", address: "Rua Uichi Miyake, 135 - Colinas de Indaituba II - Indaiatuba/SP - CEP 13331-250", email: "gurusserralheria@gmail.com", phone: "(19)99504-6847"}
  })
  console.log({ user })
}