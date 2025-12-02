import { Router } from "express"
import type express from "express"
import * as materialController from "../controllers/material.controller.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateMaterialDto } from "../dtos/create-material.dto copy 2.js"
import { UpdateMaterialDto } from "../dtos/update-material.dto copy 2.js"

const router = Router()
router.post("/material",validateDto(CreateMaterialDto),materialController.createMaterial)
router.get("/material", materialController.getAllMaterials)
router.get("/material/:id", materialController.getMaterialById)
router.put("/material/:id", validateDto(UpdateMaterialDto),materialController.updateMaterial)
router.delete("/material/:id", materialController.deleteMaterial)

export default router