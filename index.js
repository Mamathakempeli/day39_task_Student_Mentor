// require('./db/mongoose_connection')
const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(express.json());  

const PORT = process.env.PORT || 4100;
const URL = process.env.MONGODB_URL;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studentmentortask')
// ,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
const connection = mongoose.connection;
connection.on('open',() => console.log("MongoDB Connected"));



app.get('/',(req,res) => res.send(`
Welcome to Student mentor task
`))

app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))