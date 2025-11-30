import "dotenv/config"
import express from "express"
import productsRoutes from "./routes/products.routes.js"
import materialRoutes from "./routes/material.routes.js"
import clientRoutes from "./routes/client.routes.js"

const app = express()
app.use(express.json())
app.use(productsRoutes)
app.use(materialRoutes)
app.use(clientRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
})