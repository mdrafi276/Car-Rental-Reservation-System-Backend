import { Router } from "express";
import { CarController } from "./car.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CarValidations } from "./car.validation";
import { USER_ROLES } from "../user/user.constant";
import { auth } from "../../middlewares/auth";



const router = Router();

router.post(
    "/",
    auth(USER_ROLES.admin),
    validateRequest(CarValidations.createCarValidationSchema),
    CarController.createCar
);

router.get("/", CarController.getAllCar);

router.get("/:id", CarController.getSingleCar);

router.put(
    "/return",
    auth(USER_ROLES.admin),
    validateRequest(CarValidations.returnCarValidationSchema),
    CarController.retrunAndUpdate
);

router.put(
    "/:id",
    auth(USER_ROLES.admin),
    validateRequest(CarValidations.updateCarValidationSchema),
    CarController.retrunAndUpdate
);
router.delete("/:id", CarController.deleteCar)

export const CarRoutes = router;