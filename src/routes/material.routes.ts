import { Router } from "express"
import type express from "express"
import * as materialController from "../controllers/material.controller.js"

const router = Router()
router.post("/material", materialController.createMaterial)
router.get("/material", materialController.getAllMaterials)
router.get("/material/:id", materialController.getMaterialById)
router.put("/material/:id", materialController.updateMaterial)
router.delete("/material/:id", materialController.deleteMaterial)

export default router