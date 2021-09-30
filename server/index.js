require('express-async-errors')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const posts = require('./routes/posts')
const error = require('./middleware/error')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

// middlewares
app.use(express.json({ limit:"30mb" }))
app.use(express.urlencoded({ limit:"30mb", extended: true }))
app.use(cors())

// routes
app.use('/posts', posts)


// error handling
app.use(error)

// connect to DB
const connectionURL = process.env.CONNECTION_URL;
const port = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost/Friendly')
.then(() => {
    app.listen(port, console.log(`Connected to port ${port}`))
})
.catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false)