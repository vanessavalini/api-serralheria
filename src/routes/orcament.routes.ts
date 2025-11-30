import { Router } from "express"
import type express from "express"
import * as orcamentController from "../controllers/orcament.controller.js"

const router = Router()
router.post("/orcament", orcamentController.createOrcament)
router.get("/orcament", orcamentController.getAllOrcaments)
router.get("/orcament/:id", orcamentController.getOrcamentById)
router.put("/orcament/:id", orcamentController.updateOrcament)
router.delete("/orcament/:id", orcamentController.deleteOrcament)

export default router