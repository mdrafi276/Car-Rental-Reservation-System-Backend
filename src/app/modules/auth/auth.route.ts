import { Router } from "express";
imp
import { AuthValidations } from "./auth.validation";
import validateRequest from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";

const router = Router();

router.post(
    "/signup",
    validateRequest(UserValidations.userValidationSchema),
    AuthController.register
);

router.post(
    "/signin",
    validateRequest(AuthValidations.signinUserValidationSchema),
    AuthController.signin
);

export const AuthRoutes = router;