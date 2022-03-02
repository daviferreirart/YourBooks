import express from 'express'
import cors from 'cors'
import errorHandler from './error/handler'
import 'express-async-errors';
import user from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3333, () => {
    console.log("Server Up")
})

app.use(user)
app.use(errorHandler)