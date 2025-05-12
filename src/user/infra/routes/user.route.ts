import { Router } from "express";
import * as userControllers from "../controllers/user.controllers";

const router = Router();

router.get("/", userControllers.getAllUsersController);
router.get("/:email", userControllers.getUserByEmailController);
router.post("/", userControllers.createUserController);

export default router;
