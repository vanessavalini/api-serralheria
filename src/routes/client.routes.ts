import { Router } from "express"
import * as clientController from "../controllers/client.controller.js"

const router = Router()
router.post("/client", clientController.createClient)
router.get("/client", clientController.getAllClients)
router.get("/client/:id", clientController.getClientById)
router.put("/client/:id", clientController.updateClient)
router.delete("/client/:id", clientController.deleteClient)

export default router

