const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config()

/* MONGOOSE SETUP */
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log('Database connected to Mongodb');
});

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))


//ROUTES
app.use('/users',userRoute)
app.use('/auth',authRoute)
app.use('/posts',postRoute)


app.listen(8800,()=>{
    console.log('Backend  server is running on 8800 !');
})
