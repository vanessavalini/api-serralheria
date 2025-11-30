import "dotenv/config"
import express from "express"
import productsRoutes from "./routes/products.routes.js"
import materialRoutes from "./routes/material.routes.js"
import clientRoutes from "./routes/client.routes.js"
import orcamentItemRoutes from "./routes/orcamentItem.routes.js"
import orcamentRoutes from "./routes/orcament.routes.js"

const app = express()
app.use(express.json())
app.use(productsRoutes)
app.use(materialRoutes)
app.use(clientRoutes)
app.use(orcamentItemRoutes)
app.use(orcamentRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
})