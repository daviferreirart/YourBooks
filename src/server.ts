import express from 'express'
import cors from 'cors'
import errorHandler from './error/handler'
import user from './routes/user.routes'

const app = express()

app.use(cors)
app.use(express.json())

app.listen(3333 || process.env.PORT, () => {
    console.log("Server Up")
})

app.use(user)
app.use(errorHandler)