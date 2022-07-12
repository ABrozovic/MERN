import authControllers from "../controllers/authControllers";
import express = require('express');

const router = express.Router();

router.post('/register', authControllers.postRegister);

router.post('/login', authControllers.postLogin);

export default router;