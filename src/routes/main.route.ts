import { Router } from "express";
import userRoutes from "../user/infra/routes/user.route";

const router = Router();

router.use("/user", userRoutes);

export default router;
