import authControllers from "../controllers/authControllers";
import * as Joi from "joi";
import {createValidator} from "express-joi-validation";
import express = require('express');

const router = express.Router();
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
});
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(12).required(),
});
const validator = createValidator()

router.post('/register', validator.body(registerSchema), authControllers.postRegister);

router.post('/login', validator.body(loginSchema), authControllers.postLogin);

export default router;