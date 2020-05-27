const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000

require('./models/user');
// Connect to MongoDB
mongoose.connect("mongodb://localhost/instastage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})