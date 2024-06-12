import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controller';
import { UserValidations } from './user.validation';


const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidations.userValidationSchema),
    userController.signup,
);
router.post(
    '/signin',
    validateRequest(UserValidations.userValidationSchema),
    userController.signup,
);
//


export const AuthRoute = router;
