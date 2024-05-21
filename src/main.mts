import express, { Router } from 'express'
import book from './book.mjs'
import magazine from './magazine.mjs'

const router = Router()

router.use(express.json())
router.use('/book', book)
router.use('/magazine', magazine)

export default router