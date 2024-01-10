import express from "express"
import { authRouter } from "./router/auth"
import { errorHandler } from "./middleware/errorHandler"

const app= express()
app.use(express.json())
app.use('/api/users/', authRouter)
app.use( errorHandler)
app.listen(3000,()=>{console.log("listening at 3000")})