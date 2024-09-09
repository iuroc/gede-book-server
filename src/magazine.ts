import express, { Router } from 'express'
import { Magazine } from 'gede-book-api'
import { handlerApi } from './util.js'

const router: express.Router = Router()

handlerApi(router, Magazine)

export default router