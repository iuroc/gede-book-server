import { Router } from 'express'
import { Book } from 'gede-book-api'
import { handlerApi } from './util.mjs'

const router = Router()

handlerApi(router, Book)

export default router