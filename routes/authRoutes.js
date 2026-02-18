import express from 'express'
const router = express.Router()

import AuthController from '../controller/AuthController.js'

router.get('/login', AuthController.loginUser)
router.get('/register', AuthController.registerUser)
router.get('/dashboard', AuthController.dashboardUser)
router.post('/register', AuthController.createUser)
router.post('/login', AuthController.userLogin)
router.get('/logout', AuthController.logout)


export default router