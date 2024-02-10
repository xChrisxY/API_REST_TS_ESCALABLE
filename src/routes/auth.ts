import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
const router = Router();

// http://localhost:3002/auth/register
router.post('/register', registerCtrl);
// http://localhost:3002/auth/login
router.post('/login', loginCtrl);

export { router };