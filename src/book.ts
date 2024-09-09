import express, { Router } from 'express'
import { Book } from 'gede-book-api'
import { handlerApi } from './util.js'

const router: express.Router = Router()

handlerApi(router, Book)

export default router