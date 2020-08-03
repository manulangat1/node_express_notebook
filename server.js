const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')

const app = express()
dotenv.config({path:'./config/config.env'})

app.get('/',(req,res) => res.send("hello"))

const PORT = process.env.PORT || 5000 

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port:${PORT}`.yellow.bold))


