const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000


app.use(require("./routes/auth"))

// Connect to MongoDB
mongoose.connect("mongodb://localhost/instastage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

require('./models/user');

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})