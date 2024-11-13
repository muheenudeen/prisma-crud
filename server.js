import express from 'express'
import dotenv from 'dotenv'
import indexRouter from './routes/index.js'

const PORT = process.env.PORT || 2000
dotenv.config()

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(indexRouter)


app.listen(PORT, () => {
    console.log("server running");

})