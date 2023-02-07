const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override")
const router = require('./routes/tasks')

app.use(methodOverride("_method",{method:['POST','GET']}));
app.set("view engine","ejs")

app.use(express.urlencoded({extended: true}));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/ToDo',
{useNewUrlParser: true,
useUnifiedTopology: true
});

app.use('/', router)

//-[port]-//
app.listen(3002,()=>console.log('express started!'));

