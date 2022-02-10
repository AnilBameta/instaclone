const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require("cors");

const dotenv = require('dotenv');


dotenv.config()

app.use(express.json())
app.use(cors());


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected"))
.catch(err => console.log(err))


app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000,() => console.log("Backend server running"))