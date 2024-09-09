import express, { Router } from 'express'
import book from './book.js'
import magazine from './magazine.js'

const router: express.Router = Router()

router.use(express.json())
router.use('/book', book)
router.use('/magazine', magazine)

export default router