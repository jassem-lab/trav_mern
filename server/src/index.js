const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const port = process.env.PORT || 1337;
const app = express()


// Middlewares
app.use(morgan('common'))
app.use(helmet())
app.use(cors())

app.use((req, res, next) => {
    const error = new Error(`not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🚀' : error.stack
    })
})

// APIs
app.get('/', (req, res) => {
    message: "Hello world!"
})

// Start server
app.listen(port, () => {
    console.log(`app running on ${port}`);
})