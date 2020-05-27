const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000

app.use(express.json())


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/instastage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


require('./models/user');
require("./models/post");
app.use(require("./routes/auth"))
app.use(require("./routes/auth"))

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})