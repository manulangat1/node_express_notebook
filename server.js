const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const notes = require('./routes/Notes')

dotenv.config({path:'./config/config.env'})
connectDB()
const app = express()



app.use('/api/v1/notes/',notes)

const PORT = process.env.PORT || 5000 

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port:${PORT}`.yellow.bold))


