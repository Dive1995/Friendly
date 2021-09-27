require('express-async-errors')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const posts = require('./routes/posts')
const error = require('./middleware/error')

// middlewares
app.use(express.json({ limit:"30mb" }))
app.use(express.urlencoded({ limit:"30mb", extended: true }))
app.use(cors())

// routes
app.use('/posts', posts)


// error handling
app.use(error)

// connect to DB
const connectionURL = 'mongodb+srv://dive:dive1234@nodeexpressprojects.fyik5.mongodb.net/socialmedia?retryWrites=true&w=majority'
const port = process.env.PORT || 5000;


mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, console.log(`Connected to port ${port}`))
})
.catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false)