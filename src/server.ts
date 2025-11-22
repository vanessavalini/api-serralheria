import "dotenv/config"
import express from "express"
import userRoutes from "./routes/user.routes.js"
import productsRoutes from "./routes/products.routes.js"

const app = express()
app.use(express.json())
app.use(userRoutes)
app.use(productsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
})