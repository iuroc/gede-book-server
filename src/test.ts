import gedeRouter from './index.js'
import express from 'express'

const app = express()

app.use('/gede', gedeRouter)

app.listen(3030, () => {
    console.log(`http://127.0.0.1:3030`)
})
