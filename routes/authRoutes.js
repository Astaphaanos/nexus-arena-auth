import express from 'express'
const router = express.Router()

import AuthController from '../controller/AuthController.js'

router.get('/login', AuthController.loginUser)
router.get('/register', AuthController.registerUser)


export default router