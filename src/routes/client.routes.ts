import { Router } from "express"
import * as clientController from "../controllers/client.controller.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateClientDto } from "../dtos/create-client.dto copy.js"
import { UpdateClientDto } from "../dtos/update-Client.dto copy.js"

const router = Router()
router.post("/client", validateDto(CreateClientDto),clientController.createClient)
router.get("/client", clientController.getAllClients)
router.get("/client/:id", clientController.getClientById)
router.put("/client/:id",  validateDto(UpdateClientDto),clientController.updateClient)
router.delete("/client/:id", clientController.deleteClient)

export default router

