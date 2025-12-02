import { Router } from "express"
import type express from "express"
import * as orcamentController from "../controllers/orcament.controller.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateOrcamentDto } from "../dtos/create-orcament.dto.js"
// import { UpdateOrcamentDto } from "../dtos/update-orcament.dto.js"


const router = Router()
router.post("/orcament",validateDto(CreateOrcamentDto),orcamentController.createOrcament)
router.get("/orcament", orcamentController.getAllOrcaments)
router.get("/orcament/:id", orcamentController.getOrcamentById)
// router.put("/orcament/:id",validateDto(UpdateOrcamentDto), orcamentController.updateOrcament)
router.delete("/orcament/:id", orcamentController.deleteOrcament)

export default router