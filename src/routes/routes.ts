import { Router } from "express";
const router = Router()
import { UserController } from "@controllers/UserController"
import { TagController } from "@controllers/TagController"
import { ensureAdmin } from "@middlewares/ensureAdmin";
const userController = new UserController()
const tagController = new TagController()

router.post("/user/create", userController.create)
router.post("/tag/create", ensureAdmin, tagController.create)

export { router }