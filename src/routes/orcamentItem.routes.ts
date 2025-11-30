import { Router } from "express"
import type express from "express"
import * as orcamentItemController from "../controllers/orcamentItem.controller.js"

const router = Router()
router.post("/orcamentItem", orcamentItemController.createOrcamentItem)
router.get("/orcamentItem", orcamentItemController.getAllOrcamentItems)
router.get("/orcamentItem/:id", orcamentItemController.getOrcamentItemById)
router.put("/orcamentItem/:id", orcamentItemController.updateOrcamentItem)
router.delete("/orcamentItem/:id", orcamentItemController.deleteOrcamentItem)

export default router