import { Router } from 'express'
import { Magazine } from 'gede-book-api'
import { handlerApi } from './util.mjs'

const router = Router()

handlerApi(router, Magazine)

export default router