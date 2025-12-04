import express from 'express'
import { login, register } from '../controllers/auth.controller.js'

const Routes = express.Router()

// Register
Routes.post('/register',register)
// Login
Routes.post('/login',login)

export default Routes;