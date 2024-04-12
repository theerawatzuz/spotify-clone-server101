const express = require('express')

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db2')

const { readdirSync } = require('fs')
// const musicProductRouter = require('./Routes/musicProduct')
// const authRouter = require('./Routes/auth')

const app = express();

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))

//Route 1
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint')
// })

//Route 2
// app.use('/api', musicProductRouter)
// app.use('/api', authRouter)

// Route 3
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/'+r)))


app.listen(5000, ()=> console.log('Server is Running on port 5000'))