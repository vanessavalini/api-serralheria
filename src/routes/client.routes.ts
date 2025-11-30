import { Router } from "express"
import * as clientController from "../controllers/client.controller.js"

const router = Router()
router.post("/clients", clientController.createClient)
router.get("/clients", clientController.getAllClients)
router.get("/clients/:id", clientController.getClientById)

export default router