import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
import { userController } from './user.controller';


const router = express.Router();

router.post(
    '/create-course',
    validateRequest(userValidation.createSignupSchema),
    userController.signup,
);



export const UserRoutes = router;
