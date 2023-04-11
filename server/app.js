require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/router")
require('./db/conn');

const PORT = 4000;


// Middleware 
app.use(express.json());
app.use(cors());
app.use(router);



app.listen(PORT, ()=>{
    console.log(`Server started at Port No. ${PORT}`);
})